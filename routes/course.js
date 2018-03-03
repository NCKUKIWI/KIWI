var express = require('express');
var router = express.Router();
var helper = require('../helper');
var db = require('../model/db');

/* index */
router.get('/', function(req, res) {
    console.log("\n========================================");
    var dt = new Date();
    console.log(dt);
    console.log('\n' + 'GET /course');
    /*  設定要的欄位 */
    var columns = ['id', '課程名稱', '系號', '課程碼', '分班碼', '系所名稱', '老師', '時間', 'comment_num'];

    var all_courses = [];
    var custom_courses = [];

    db.GetColumn('course_new', columns, { 'column': 'id', 'order': 'DESC' }, function(courses) {
        all_courses = courses;

        if (req.query.hasOwnProperty("queryw")) {
            // clean the query to avoid sql injection
            var cleanQuery = req.query.queryw.replace(/\'|\#|\/\*/g, "");
            // if someone want to query alternately by "space"
            var QueryArray = cleanQuery.split(" ");

            db.FindbyColumnFuzzy('course_new', columns, QueryArray, function(custom_courses) {
                check_Login(req, res, all_courses, custom_courses);
            });
        } else if (req.query.hasOwnProperty("teacher")) {
            db.FindbyColumn('course_new', columns, { "老師": req.query.teacher }, function(custom_courses) {
                check_Login(req, res, all_courses, custom_courses);
            });
        } else if (req.query.hasOwnProperty("course_name")) {
            db.FindbyColumn('course_new', columns, { "課程名稱": req.query.course_name }, function(custom_courses) {
                check_Login(req, res, all_courses, custom_courses);
            });
        } else if (req.query.hasOwnProperty("catalog")) {
            db.FindbyColumn('course_new', columns, { "系號": req.query.catalog }, function(custom_courses) {

            });
        } else {
            check_Login(req, res, all_courses, custom_courses);
        }
    });
});

/*傳入所有課程 */
router.get('/allCourse', function(req, res) {
    console.log('\n' + 'GET /allCourse');

    var columns = ['id', '課程名稱', '系號', '課程碼', '分班碼', '系所名稱', '老師', '時間', 'comment_num'];
    db.GetColumn('course_new', columns, { 'column': 'id', 'order': 'DESC' }, function(courses) {
        var nowCourse = [];
        var nowCourse_hasComment = []; // 裝nowCourse的有comment的課程
        var courses_Department = {}; // 用來分類所有系所，下面使用object property的方式逐一分類

        for (var i in courses) {
            nowCourse.push(courses[i]);
            if (courses[i].comment_num != 0) nowCourse_hasComment.push(courses[i]);
            if (courses_Department.hasOwnProperty(courses[i].系號)) {
                courses_Department[courses[i].系號].push(courses[i]);
            } else {
                courses_Department[courses[i].系號] = [];
                courses_Department[courses[i].系號].push(courses[i]);
            }
        }
        // res.send(courses);
        res.send({
            'nowCourse': nowCourse,
            'courses_Department': courses_Department,
        });
    });
});

router.get('/CourseByKeywords', function(req, res) {
    console.log('\n' + 'GET /course/CourseByKeywords');
    console.log(req.query);

    var columns = ['id', '課程名稱', '系號', '課程碼', '分班碼', '系所名稱', '老師', '時間', 'comment_num'];
    if (req.query.hasOwnProperty("queryw")) {
        // clean the query to avoid sql injection
        var cleanQuery = req.query.queryw.replace(/\'|\#|\/\*/g, "");
        // if someone want to query alternately by "space"
        var QueryArray = cleanQuery.split(" ");

        db.FindbyColumnFuzzy('course_new', columns, QueryArray, function(custom_courses) {
            res.send(custom_courses);
        });
    } else if (req.query.hasOwnProperty("teacher")) {
        db.FindbyColumn('course_new', columns, { "老師": req.query.teacher }, function(custom_courses) {
            res.send(custom_courses);
        });
    } else if (req.query.hasOwnProperty("course_name")) {
        db.FindbyColumn('course_new', columns, { "課程名稱": req.query.course_name }, function(custom_courses) {
            res.send(custom_courses);
        });
    } else if (req.query.hasOwnProperty("catalog")) {
        db.FindbyColumn('course_new', columns, { "系號": req.query.catalog }, function(custom_courses) {
            res.send(custom_courses);
        });
    }
});

/* add course */
router.post('/addcourse/:id', helper.apiAuth(), function(req, res) {
    var courseid = parseInt(req.params.id);
    console.log('\n' + 'POST /course/addcourse/' + courseid);
    var userid = parseInt(req.user.id);
    var name = req.user.name;
    console.log("選課者: " + name);
    /* 確認是否選過課了 */
    db.FindbyColumn('cart', ["id"], { 'user_id': userid, 'course_id': courseid }, function(carts) {
        if (carts.length > 0) {
            console.log('Already choose');
            res.send('Already choose');
        } else {
            /* 新增選課紀錄 */
            var cart = {
                user_id: userid,
                course_id: courseid
            }
            db.Insert('cart', cart, function(err, results) {
                if (err) throw err;
                console.log('Choose course ' + courseid + ' success');
                res.send('success');
            });
        }
    });
});

/* del course*/
router.post('/delcourse/:id', function(req, res) {
    var courseid = parseInt(req.params.id);
    var userid = parseInt(req.user.id);
    var name = req.user.name;
    console.log('\n' + 'DELETE /course/delcourse/' + courseid);
    console.log("退課者: " + name);
    db.DeleteByColumn('cart', { 'course_id': courseid, 'user_id': userid }, function(err) {
        res.send('Success');
    });
});

/* input add course */
router.post('/inputaddcourse/:courseid', function(req, res) {
    var courseserial = req.params.courseid.toUpperCase();
    console.log('\n' + 'POST /course/inputaddcourse/' + courseserial);
    var column = ["id", "課程名稱", "時間"];
    /* 透過輸入的選課序號 查找課程 */
    db.FindbyColumn('course_new', column, { '選課序號': courseserial }, function(course) {
        /* 若該選課序號無對應的課程 回傳not found */
        if (course.length == 0) {
            console.log("Course " + courseserial + " not found");
            res.send("Not found");
        }
        /* 有找到課程 則傳送課程資訊 */
        else {
            var courseid = course[0].id
                /* 若用戶非登入 則直接傳送課程資訊 */
            if (req.user == undefined) {
                res.send(course);
            } else {
                var userid = parseInt(req.user.id);
                var name = req.user.name;
                console.log("選課者: " + name);
                /* 確認是否選過課了 */
                db.FindbyColumn('cart', ["id"], { 'user_id': userid, 'course_id': courseid }, function(carts) {
                    /* 用戶清單中有該課程 */
                    if (carts.length > 0) {
                        console.log('Already choose');
                        res.send('Already choose');
                    } else {
                        /* 新增選課紀錄 */
                        var cart = {
                            user_id: userid,
                            course_id: courseid
                        }
                        db.Insert('cart', cart, function(err, results) {
                            res.send(course);
                        });
                    }
                });
            }
        }
    });
});

/* show */
router.get('/:id', function(req, res) {
    var id = req.params.id;
    console.log('\n' + 'GET /course/' + id);
    if (id.match(/\D/g)) {
        res.redirect('/');
    } else {
        /* 尋找課程的資訊 */
        db.query_post2(id, function(courseInfo, comment) {
            courseInfo = courseInfo[0];
            courseInfo.comment = 0;
            courseInfo.course_style = 0;
            courseInfo.report_hw = 0;
            courseInfo.score_style = 0;

            for (var i in comment) {
                var buf = comment[i];
                for (var j in comment[i]) {
                    // console.log(buf[j])
                    if (buf[j] == "無" || buf[j] == "" || !buf[j]) {
                        delete buf[j];
                        continue;
                    }
                    courseInfo[j]++;
                }
            }
            db.FindbyColumn('course_rate', ["*"], { course_name: courseInfo.課程名稱, teacher: courseInfo.老師 }, function(rates) {
                var sweet = 0;
                var hard = 0;
                var recommand = 0;
                var rate_count = 0;
                if (rates.length > 0) {
                    for (var i in rates) {
                        sweet += rates[i].sweet;
                        hard += rates[i].hard;
                        recommand += rates[i].recommand;
                    }
                    sweet /= rates.length;
                    hard /= rates.length;
                    recommand /= rates.length;
                    rate_count = rates.length;
                }
                if (req.user == undefined) {
                    res.render('course/show', {
                        'recommand': recommand,
                        'hard': hard,
                        'sweet': sweet,
                        'rate_count': rate_count,
                        'courseInfo': courseInfo,
                        'comment': comment,
                        'courserate_id': 0,
                        'user': req.user,
                        'check': null
                    })
                } else {
                    var userid = parseInt(req.user.id);
                    var courserate_id = 0;
                    if (rates.length > 0) {
                        for (var i in rates) {
                            if (rates[i].user_id == userid) {
                                courserate_id = rates[i].id;
                            }
                        }
                    }
                    /* 有登入 抓取用戶的選課清單 */
                    db.FindbyColumn('cart', ['id'], { 'user_id': req.user.id }, function(check) {
                        res.render('course/show', {
                            'recommand': recommand,
                            'hard': hard,
                            'sweet': sweet,
                            'rate_count': rate_count,
                            'courseInfo': courseInfo,
                            'comment': comment,
                            'courserate_id': courserate_id,
                            'user': req.user,
                            'check': check
                        });
                    });
                }
            });
        });
    }
});

function check_Login(req, res, all_courses, custom_courses) {
    if (req.user == undefined) {
        res.render('course/index', {
            'courses': all_courses,
            'custom_courses': custom_courses,
            'user': req.user,
            'carts': null //沒登入 選課清單為null
        });
    } else {
        var userid = parseInt(req.user.id);
        var colmuns = ['course_id'];
        /* 有登入 抓取用戶的選課清單 */
        db.FindbyColumn('cart', ['course_id'], { 'user_id': userid }, function(carts) {
            res.render('course/index', {
                'courses': all_courses,
                'custom_courses': custom_courses,
                'user': req.user,
                'carts': carts
            });
        });
    }
}

module.exports = router;