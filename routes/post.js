var express = require('express');
var router = express.Router();
var redis = require('../helper/cache').redis;
var db = require('../model/db');
var sanitizeHtml = require('sanitize-html');
var axios = require('axios')
var bot = require('./bot');
var cache = require('../helper/cache');
var courseCacheKey = cache.courseCacheKey;
var middleware = require('../middleware');

/* index  */
router.get('/', function (req, res) {
    // Log
    console.log("\n")
    console.log("========================================");
    var dt = new Date();
    console.log(dt);
    console.log("query: " + req.url);
    if (req.user !== undefined) console.log("使用者：" + req.user.name);

    /* 設定 Order 欄位 */
    if (req.query.order) {
        var order = req.query.order;
    } else {
        var order = 'course_name';
    }
    /*  設定要的欄位 */
    var colmuns = ['id', 'course_name', 'catalog', 'teacher', 'semester', 'user_id'];
    db.GetColumn('post', colmuns, {
        'column': order,
        'order': 'DESC'
    }, function (posts) {
        if (req.query.hasOwnProperty("queryw")) {
            db.query_post(posts, req.query.queryw, "query", function (posts, teachers, course_name) {
                if (req.query.order) {
                    res.json(posts);
                } else {
                    res.json({
                        'posts': posts,
                        'teachers': teachers,
                        'course_name': course_name,
                        'user': req.user
                    });
                }
            });
        } else if (req.query.hasOwnProperty("teacher")) {
            db.query_post(posts, req.query.teacher, "teacher", function (posts, teachers, course_name) {
                if (req.query.order) {
                    res.json(posts);
                } else {
                    res.json({
                        'posts': posts,
                        'teachers': teachers,
                        'course_name': course_name,
                        'user': req.user
                    });
                }
            });
        } else if (req.query.hasOwnProperty("course_name")) {
            db.query_post(posts, req.query.course_name, "course_name", function (posts, teachers, course_name) {
                if (req.query.order) {
                    res.json(posts);
                } else {
                    res.json({
                        'posts': posts,
                        'teachers': teachers,
                        'course_name': course_name,
                        'user': req.user
                    });
                }
            });
        } else if (req.query.hasOwnProperty("catalog")) {
            switch (req.query.catalog) {
                case "A9":
                    req.query.catalog = "通識";
                    break;
                case "A2":
                    req.query.catalog = "體育";
                    break;
                case "A1":
                    req.query.catalog = "外國語言";
                    break;
                case "A6":
                    req.query.catalog = "服務學習";
                    break;
                case "A7":
                    req.query.catalog = "基礎國文";
                    break;
                case "AG":
                    req.query.catalog = "公民歷史";
                    break;
                case "M":
                    req.query.catalog = "必修";
                    break;
                case "C":
                    req.query.catalog = "選修";
                    break;
                default:
                    req.query.catalog = "";
                    break;
            }
            db.query_post(posts, req.query.catalog, "catalog", function (posts, teachers, course_name) {
                if (req.query.order) {
                    res.json(posts);
                } else {
                    res.json({
                        'posts': posts,
                        'teachers': teachers,
                        'course_name': course_name,
                        'user': req.user
                    });
                }
            });
        } else {
            var teacher = db.search_item(posts, "teacher");
            var courseName = db.search_item(posts, "course_name");
            if (req.query.order) {
                res.json(posts);
            } else {
                res.json({
                    'posts': posts,
                    'teachers': teacher,
                    'course_name': courseName,
                    'user': req.user
                });
            }
        }
    });
});

/* create */
router.post('/create', function (req, res) {
    console.log('\n' + 'POST /post/create');
    if (req.user == undefined) {
        console.log("Not login");
        res.json([{
            msg: "請重新登入!"
        }]);
    } else {
        var userid = parseInt(req.user.id);
        console.log('User_id: ' + req.user.id + ' User_name: ' + req.user.name);
        req.checkBody('course_name', '課程名稱不可為空').notEmpty();
        req.checkBody('comment', '心得不可為空').notEmpty();
        req.checkBody('comment', '心得最低需求 50 字').isLength({ min: 50});
        req.checkBody('got', '收穫不可為空').notEmpty();
        req.checkBody('sweet', '甜度不可為空').notEmpty();
        req.checkBody('cold', '涼度不可為空').notEmpty();
        var errors = req.validationErrors();
        if (errors) {
            console.log("Error " + errors);
            res.send(errors);
        } else {
            for (var aContent in req.body) {
                sanitizeHtml(req.body[aContent], {
                    allowedTags: [],
                    selfClosing: ['a', 'img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
                    allowedSchemes: [],
                    allowedSchemesByTag: {},
                    allowedSchemesAppliedToAttributes: [],
                    allowProtocolRelative: true
                });
            }
            var post = {
                course_name: req.body.course_name.replace(/\'|\#|\/\*/g, ""),
                teacher: req.body.teacher.replace(/\'|\#|\/\*/g, ""),
                semester: req.body.semester.replace(/\'|\#|\/\*/g, ""),
                catalog: req.body.catalog,
                comment: req.body.comment.replace(/\'|\#|\/\*|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, ""),
                // report_hw: req.body.report_hw.replace(/\'|\#|\/\*/g, ""),
                // course_style: req.body.course_style.replace(/\'|\#|\/\*/g, ""),
                user_id: userid
            }
            db.Insert('post', post, function (err, results) {
                if (err) throw err;
                console.log(results);
                var rate = {
                    sweet: parseInt(req.body.sweet), // 課程甜度
                    cold: parseInt(req.body.cold), // 課程涼度
                    // recommand: parseInt(req.body.recommand.replace(/\'|\#|\/\*/g, "")),
                    // give: parseInt(req.body.give.replace(/\'|\#|\/\*/g, "")),
                    got: parseInt(req.body.got), // 課程收穫
                    course_name: req.body.course_name.replace(/\'|\#|\/\*/g, ""),
                    teacher: req.body.teacher.replace(/\'|\#|\/\*/g, ""),
                    user_id: userid,
                    post_id: results.insertId
                }
                db.Insert('course_rate', rate, function (err, results) {
                    if (err) throw err;
                    column = ['id'];
                    db.Query(`SELECT id FROM course_new WHERE 課程名稱="${req.body.course_name}" AND 老師="${req.body.teacher}"`, function (DbSearch) {
                        if(DbSearch.length!=0){  // 有在course_new找到這門課, 則清掉該課程對應到的key就好
                            db.query_post2(DbSearch[0].id, function (courseInfo, comment) {
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
                                db.FindbyColumn('course_rate', ["*"], { course_name: req.body.course_name, teacher: req.body.teacher }, function (rates) {
                                    var sweet = 0;
                                    var cold = 0;
                                    var got = 0;
                                    var rate_count = 0;
                                    if (rates.length > 0) {
                                        for (var i in rates) {
                                            sweet += rates[i].sweet;
                                            cold += rates[i].cold;
                                            got += rates[i].got;
                                        }
                                        sweet /= rates.length;
                                        cold /= rates.length;
                                        got /= rates.length;
                                        rate_count = rates.length;
                                    }
                                    var data = {
                                        'got': got,
                                        'cold': cold,
                                        'sweet': sweet,
                                        'rate_count': rate_count,
                                        'courseInfo': courseInfo,
                                        'comment': comment,
                                        'rates': rates
                                    };
                                    for(var d in DbSearch){
                                        redis.set(courseCacheKey(DbSearch[d].id), JSON.stringify(data));
                                    }
                                    res.send("success");
                                })
                            });
                        }else{ // 沒找到這門課, 不做任何事
                            res.send("success");
                        }
                    });
                });
            });
        }
    }
});

/* new */
router.get('/new', function (req, res) {
    var sql = 'SELECT id,課程名稱,時間,老師,系所名稱,semester FROM course_all WHERE semester ="104-2" OR semester ="105-1" OR semester ="105-2" OR semester ="106-1" OR semester = "106-2"';
    db.Query(sql, function (course) {
        res.json({
            'course': course,
            'user': req.user
        });
    });
});

/* show */
router.get('/:id', function (req, res) {
    var id = req.params.id;
    if (id.match(/\D/g)) {
        console.log('\n' + 'GET /post/' + id);
        res.redirect('/');
    } else {
        console.log('\n' + 'GET /post/' + id);
        db.FindbyID('post', id, function (post) {
            db.FindbyColumn('course_rate', ['give', 'got'], {
                "post_id": post.id
            }, function (rate) {
                res.json({
                    'post': post,
                    'user': req.user,
                    'rate': (rate.length > 0) ? rate[0] : null
                });
            });
        });
    }
});



/*report post */
router.post('/report/:id', function (req, res) {
    /* 要檢舉的文章id*/
    var postid = parseInt(req.params.id);
    console.log('\n' + 'POST /post/report/' + postid);
    /* 檢查用戶是否登入 */
    var userid = req.body['user'];
    if (userid !== undefined) {
        /* 檢查是否檢舉過 依照user_id及post_id去尋找 */
        db.FindbyColumn('report_post', ["id"], {
            'post_id': postid,
            'user_id': userid
        }, function (reports) {
            if (reports.length > 0) {
                console.log('Already report');
                res.send('Already report');
            } else {
                /* 區分檢舉原因 */
                var type = req.body['reason'];
                var reason = type;
                /* 新增檢舉紀錄 */
                var report_post = {
                    user_id: userid,
                    post_id: postid,
                    reason: reason
                }
                db.Insert('report_post', report_post, function (err, results) {
                    if (err) throw err;
                    console.log('Report post ' + postid + ' success');
                    /* 依照post_id將文章的檢舉次數+1 */
                    db.UpdatePlusone('post', 'report_count', postid, function (results) {
                        res.send('Success');
                    });
                });
                // bot.sendReport(report_post);
            }
        });
    } else {
        console.log('No login');
        res.send('No Login');
    }
});

/*report post */
router.post('/setWish/:userID',middleware.checkLogin(), function (req, res) {
    var userID = parseInt(req.params.userID);
    console.log('\n' + 'POST /post/setWish/' + userID);
    let wishList = [];
    if(Array.isArray(req.body['now_wishlist'])){
   		wishList = req.body['now_wishlist'];
    }
    else{
    	wishList.push(req.body['now_wishlist']);
    }
    console.log(wishList)
    db.FindbyColumn('user', ['name'], {'id':userID}, function(rs){
        if(rs.length === 0){
            res.send('wrong user')
        }else{
            db.DeleteByColumn('wishList', {'userID':userID}, function (err) {
                if(err) console.log(err);
                for (let w in wishList){
                    let data = {
                        'userID':userID,
                        'courseID':wishList[w]
                    }
                    db.Insert('wishList',data,function(err,results){
                        if(err)console.log(err)                
                    })
                }
                res.send('success');
            });   
        }
    })
});

router.post('/setTable/:userID', middleware.checkLogin(), function (req, res) {
    var userID = parseInt(req.params.userID);
    console.log('\n' + 'POST /post/setTable/' + userID);
    let tableList = [];
    console.log(req.body);
    if(Array.isArray(req.body['now_table'])){
   		tableList = req.body['now_table'];
    }
    else{
    	tableList.push(req.body['now_table']);
    }
    console.log(tableList);
    db.FindbyColumn('user', ['name'], {'id':userID}, function(rs){
        if(rs.length === 0){
            res.send('wrong user')
        }else{
            db.DeleteByColumn('tableList', {'userID':userID}, function (err) {
                if(err) console.log(err);
                for (let t in tableList){
                    let data = {
                        'userID':userID,
                        'courseID':tableList[t],
                        'userName':rs[0]['name']
                    }
                    db.Insert('tableList',data,function(err,results){})
                }
                res.send('success')
            });
        }
    })
});

/* del */
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    console.log('\n' + 'DELETE post/' + id);
    db.DeleteById('post', id, function (err) {
        res.send('Success');
    });
});



module.exports = router;