var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
var cache = require('../helper/cache');
var redis = cache.redis;
var courseCacheKey = cache.courseCacheKey;
var db = require('../model/db');


/** Legacy:
 * /addcourse/:id
 * /delcourse/:id
 * /inputaddcourse/:courseid
 */

 
// 11/18
// render -> send 
// delete some redundancy edge


/* index */
router.get('/', function (req, res) {
    console.log("\n========================================");
    var dt = new Date();
    console.log(dt);
    console.log('\n' + 'GET /course');
    /*  設定要的欄位 */
    var columns = ['id', '課程名稱', '系號', '課程碼', '分班碼', '系所名稱', '老師', '時間', 'comment_num'];

    var all_courses = [];
    var custom_courses = [];

    db.GetColumn('course_new', columns, { 'column': 'id', 'order': 'DESC' }, function (courses) {
        all_courses = courses;

        if (req.query.hasOwnProperty("queryw")) {
            // clean the query to avoid sql injection
            var cleanQuery = req.query.queryw.replace(/\'|\#|\/\*/g, "");
            // if someone want to query alternately by "space"
            var QueryArray = cleanQuery.split(" ");

            db.FindbyColumnFuzzy('course_new', columns, QueryArray, function (custom_courses) {
                check_Login(req, res, all_courses, custom_courses);
            });
        } else if (req.query.hasOwnProperty("teacher")) {
            db.FindbyColumn('course_new', columns, { "老師": req.query.teacher }, function (custom_courses) {
                check_Login(req, res, all_courses, custom_courses);
            });
        } else if (req.query.hasOwnProperty("course_name")) {
            db.FindbyColumn('course_new', columns, { "課程名稱": req.query.course_name }, function (custom_courses) {
                check_Login(req, res, all_courses, custom_courses);
            });
        } else if (req.query.hasOwnProperty("catalog")) {
            db.FindbyColumn('course_new', columns, { "系號": req.query.catalog }, function (custom_courses) {

            });
        } else {
            check_Login(req, res, all_courses, custom_courses);
        }
    });
});


/* 傳出歷屆所有課程 the courses all previous */
router.get('/allCoursePrev', function (req, res) {
    var columns = ['id', '課程名稱', '老師', 'semester'];
    db.GetColumn('course_all', columns, { 'column': 'id', 'order': 'DESC' }, function (courses) {
        // res.send(JSON.stringify(courses))
        console.log(JSON.stringify(courses))
    });
});

router.get('/allDpmt', function (req, res) {
    db.Query('SELECT * FROM department_all', function(result){
        data = JSON.stringify(result)
        for(let r in result){ // split the raw data 
            let name = result[r]['DepName']
            from = name.indexOf('）')
            to = from
            while(name.charAt(to)!=' '){
                to++;
            }
            result[r]['DepName'] = name.slice(from+1, to)
        }
        res.json(result)
    })
})

router.get('/CourseByKeywords', function (req, res) {
    console.log('\n' + 'GET /course/CourseByKeywords');
    console.log(req.query);

    var columns = ['id', '課程名稱', '系號', '課程碼', '分班碼', '系所名稱', '老師', '時間', 'comment_num'];
    if (req.query.hasOwnProperty("queryw")) {
        // clean the query to avoid sql injection
        var cleanQuery = req.query.queryw.replace(/\'|\#|\/\*/g, "");
        // if someone want to query alternately by "space"
        var QueryArray = cleanQuery.split(" ");

        db.FindbyColumnFuzzy('course_new', columns, QueryArray, function (custom_courses) {
            res.send(custom_courses);
        });
    } else if (req.query.hasOwnProperty("course_id")) {
        db.FindbyColumn('course_new', columns, { "id": req.query.course_id }, function (custom_courses) {
            res.send(custom_courses);
        });
    }
});


/* show */
router.get('/:id', function (req, res) {
    var id = req.params.id;
    console.log('\n' + 'GET /course/' + id);
    if (id.match(/\D/g)) {
        res.redirect('/');
    } else {
        redis.get(courseCacheKey(id), function (err, reply) {
            if (reply) {
                var data = JSON.parse(reply);
                var rates = data.rates;
                if (req.user && rates.length > 0) {
                    for (var i in rates) {
                        if (rates[i].user_id == req.user.id) {
                            data['courserate_id'] = rates[i].id;
                        }
                    }
                }
                data['courserate_id'] = 0;
                data['user'] = req.user;
                res.send(data);
            } else {
                /* 尋找課程的資訊 */
                db.query_post2(id, function (courseInfo, comment) {
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
                    db.FindbyColumn('course_rate', ["*"], { course_name: courseInfo.課程名稱, teacher: courseInfo.老師 }, function (rates) {
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
                        var data = {
                            'recommand': recommand,
                            'hard': hard,
                            'sweet': sweet,
                            'rate_count': rate_count,
                            'courseInfo': courseInfo,
                            'comment': comment,
                            'rates': rates
                        }
                        redis.set(courseCacheKey(id), JSON.stringify(data));
                        if (req.user) {
                            if (rates.length > 0) {
                                for (var i in rates) {
                                    if (rates[i].user_id == req.user.id) {
                                        data['courserate_id'] = rates[i].id;
                                    }
                                }
                            } else {
                                data['courserate_id'] = 0;
                            }
                        } else {
                            data['courserate_id'] = 0;
                        }
                        data['user'] = req.user;
                        res.send(data);
                    });
                });
            }
        });
    }
});

function check_Login(req, res, all_courses, custom_courses) {
    if (req.user) {
        var userid = parseInt(req.user.id);
        var colmuns = ['course_id'];
        /* 有登入 抓取用戶的選課清單 */
        db.FindbyColumn('cart', ['course_id'], { 'user_id': userid }, function (carts) {
            res.send({
                'courses': all_courses,
                'custom_courses': custom_courses,
                'user': req.user,
                'carts': carts
            });
        });
    } else {
        res.send({
            'courses': all_courses,
            'custom_courses': custom_courses,
            'user': req.user,
            'carts': null //沒登入 選課清單為null
        });
    }
}

module.exports = router;