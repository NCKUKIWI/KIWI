var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
var cache = require('../helper/cache');
var gmailSend = require('./gmailSend/gmailSend')
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
    let col = ['id', '系號', '選課序號', '課程名稱', '老師', '時間', '學分', '選必修', '系所名稱', 'comment_num', '課程碼'];
    db.GetColumn('course_new', col , { 'column': 'comment_num', 'order': 'DESC' }, function (courses) {
        for(var i in courses){
         courses[i]['選課序號'] = courses[i]['選課序號'].replace(courses[i]['系號'], '');
            var new_name = courses[i]['系所名稱'].replace(/[a-zA-Z]/g, ""); // 把系所的英文名稱拿掉（但是要避免全英文的系所）
            if(new_name != ""){
                courses[i]['系所名稱'] = new_name;
            }
        }
        res.send({
            'courses': courses,
        });
    });
});


/* 傳出歷屆所有課程 the courses all previous */
router.get('/allCoursePrev', function (req, res) {
    var columns = ['id', '課程名稱', '老師', 'semester', '系號'];
    db.GetColumn('course_all', columns, { 'column': 'id', 'order': 'DESC' }, function (courses) {
        res.json(courses)
        // console.log(JSON.stringify(courses))
    });
});

router.get('/allDpmt', function (req, res) {
    db.Query('select distinct course_new.系號 as DepPrefix, course_new.系所名稱 as DepName from course_new', function(result){
        for(item in result){
        	var new_name = result[item].DepName.replace(/[a-zA-Z]/g, "");
        	if(new_name != ""){
        		result[item].DepName = new_name;
        	}
        }
        data = JSON.stringify(result)
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
            res.json(custom_courses);
        });
    } else if (req.query.hasOwnProperty("course_id")) {
        db.FindbyColumn('course_new', columns, { "id": req.query.course_id }, function (custom_courses) {
            res.json(custom_courses);
        });
    }
});

router.get('/showCourse', function (req, res) {
    console.log("hi")
    db.Query('SELECT * FROM courseTest', function(result){
        res.send(JSON.stringify(result))
    })
})

router.get('/getReportData', function (req, res) {
    db.GetColumn('report_post', ['id','course_name', 'user_id', 'post_id', 'reason', 'onRead', 'reviewer', 'pass', 'response'], { 'column': 'id', 'order': 'DESC' }, function(result){
        res.send(JSON.stringify(result))
    })
})

router.get('/getReportComment/:id', function (req, res) {
    let id = req.params.id;
    let table = req.query.table
    if(table === 'post'){ 
        db.FindbyID(table, id, function(result){
            res.json(result)
        })
    }else{ // table = report_post
        column = ['comment', 'reason', 'reviewer', 'response', 'course_name'];
        db.FindbyColumn(table, column,{"post_id":id}, function(result){
            res.json(result[0])
        })
    }
})

router.post( '/sendReport', function (req, res){
    let pass = req.body.pass
    let postid = req.body.postid
    let response = req.body.response
    let reviewer = req.body.reviewer
    db.FindbyColumn('report_post',['onRead'],{'post_id':postid} ,function(result){
        if(result[0]['onRead'] == 0){ // the report isn't read
            db.Update('report_post', {'onRead':1, 'reviewer':reviewer, 'response':response}, {'post_id':postid} ,function(){})
            if(pass){
                db.Update('report_post', {'pass':1}, {'post_id':postid} ,function(){})
                gmailSend.sendMail('nckuhub@gmail.com', 'TO 檢舉人： 你的檢舉通過囉')
                db.Query(`SELECT * FROM post WHERE id=${postid}`, function(result){
                    uid = result[0].user_id;
                    data = JSON.stringify(result[0])
                    if(uid!=0){ // which means this post is written by the user instead of other website.
                        gmailSend.sendMail('nckuhub@gmail.com', 'TO 被檢舉人： 有人檢舉你的心得，且通過我們審核了，你的心得將會GG喔')	 
                        redis.set(cache.draftKey(result[0].course_name, result[0].teacher, uid), data, function(){
                            db.DeleteByColumn('post', {'id':postid}, function(){})
                        });
                    }
                    db.FindbyColumn('course_new',['id'], {'課程名稱': result[0].course_name, '老師': result[0].teacher.split(/\s|\*/g)[0]}, function(res){
                        for(let d in res){
                            let course_id = res[d]["id"]
                            redis.del(courseCacheKey(course_id));
                        }
                    })
                })
            }else{
                db.Update('report_post', {'pass':0}, {'post_id':postid} ,function(){})
                gmailSend.sendMail('nckuhub@gmail.com', 'TO 檢舉人： 你的檢舉並沒有通過')	 
            }
        }else{
            console.log('it has been read.')
        }
        res.send('success')
    })
}
)

/* show */
router.get('/:id', function (req, res) {
    var id = req.params.id;
    console.log('\n' + 'GET /course/' + id);
    if (id.match(/\D/g)) {
        res.redirect('/');
    } else {
        
        db.Query(`UPDATE course_new SET count = count + 1 WHERE id=${id}`, function(){})
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
                for (var i in data.comment){
                    data['comment'][i].comment = data['comment'][i].comment.replace(/\n/g, "\\n");    
                }
                data['courseInfo']['id'] = id
                res.json(data);
            } else {
                /* 尋找課程的資訊 */
                db.query_post2(id, function (courseInfo, comment) {
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

                    courseInfo = courseInfo[0];
                    courseInfo.comment = 0;
                    courseInfo.course_style = 0;
                    courseInfo.report_hw = 0;
                    courseInfo.score_style = 0;

                    db.FindbyColumn('course_rate', ["*"], { course_name: courseInfo.課程名稱, teacher: courseInfo.老師.split(/\s|\*/g)[0] }, function (rates) {
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
                            'got': got.toFixed(1),
                            'cold': cold.toFixed(1),
                            'sweet': sweet.toFixed(1),
                            'rate_count': rate_count,
                            'courseInfo': courseInfo,
                            'comment': comment,
                            'rates': rates
                        }
                        for (var i in data.comment){
                            data['comment'][i].comment = data['comment'][i].comment.replace(/\n/g, "\\n");    
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
                        res.json(data);
                    });
                });
            }
        });
    }
});

router.get('/Info/:courseID', function (req, res) {
    var id = req.params.courseID;
    console.log('\n' + 'GET /course/' + id);
    if (id.match(/\D/g)) { // if ID isn't the digital.
        res.redirect('/');
    }else{
        let col = ['id', '系號', '選課序號', '課程名稱', '老師', '時間', '學分', '選必修', '系所名稱'];
        db.FindbyColumn('course_new', col, {'id':id}, function(info, err){
            if(info.length == 0){
                res.send('No data')
            }else{
                info[0]['選課序號'] = info[0]['選課序號'].replace(info[0]['系號'], '');
                res.json(info[0]);
            }
        })
    } 
});

// For front-end study

router.post('/insertCourse', function (req, res) {
    let data = {'course':req.body['course'], 'courseID':req.body['courseID'], 'grade':req.body['grade'], 'teacher':req.body['teacher']}
    db.Insert('courseTest', data, function(){
        res.send("success")
    })
})

router.post('/modifyCourse/', function (req, res) {
    let id = req.body['id']
    delete req.body.id;
    let data = req.body;
    db.Update('courseTest', data, {'id':id}, function(){
        res.send("success")
    })
})

router.post('/deleteCourse/', function (req, res) {
    let id = req.body['id']
    db.DeleteById('courseTest', id, function(){
        res.send("success")
    })
})

router.get('/getPoint/:courseID', function(req, res){
    var id = req.params.courseID;
    db.query_post2_courseAll(id, function(courseInfo, comment){
        let now_comment_num = comment.length;
        courseInfo = courseInfo[0];
        if(now_comment_num < 3) {
            res.send({'point': 3});
        }
        else if (courseInfo['系號'] != 'A9' && courseInfo['系號'] != 'A1' && courseInfo['系號'] != 'A2' && courseInfo['系號'] != 'A7'){
            res.send({'point': 2});
        }
        else{
            res.send({'point': 1});
        }
    })
})


// function check_Login(req, res, all_courses, custom_courses) {
//     if (req.user) {
//         var userid = parseInt(req.user.id);
//         var colmuns = ['course_id'];
//         /* 有登入 抓取用戶的選課清單 */
//         db.FindbyColumn('cart', ['course_id'], { 'user_id': userid }, function (carts) {
//             res.json({
//                 'courses': all_courses,
//                 'custom_courses': custom_courses,
//                 'user': req.user,
//                 'carts': carts
//             });
//         });
//     } else {
//         res.json({
//             'courses': all_courses,
//             'custom_courses': custom_courses,
//             'user': req.user,
//             'carts': null //沒登入 選課清單為null
//         });
//     }
// }

module.exports = router;