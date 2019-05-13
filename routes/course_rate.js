var express = require('express');
var router = express.Router();
var redis = require('../helper/cache').redis;
var db = require('../model/db');

/* course_rate form */
router.get('/new/:id', function(req, res) {
    console.log('\n'+'GET /course_rate/new/'+req.params.id);
    if(req.user){
        res.json({
            'courseid':req.params.id,
            'course_name':req.query.course_name.replace(/\'|\#|\/\*/g,""),
            'teacher':req.query.teacher.replace(/\'|\#|\/\*/g,"")
        });
    }
    else{
        res.send('No login');
    }
});

router.post('/setLike', function(req, res) {
    console.log(req.query['like'])
    let data = {
        'like':req.query['like'],
        'dislike':req.query['dislike']
    }
    db.Insert('course_rate',data,function(err,results){
        res.send('success')
    })
});
router.post('/create', function(req, res) {
    console.log('\n'+'POST /course_rate/create');
    if(req.user){
        var userid = parseInt(req.user.id);
        var rate = {
            sweet:parseInt(req.body.sweet.replace(/\'|\#|\/\*/g,"")),
            hard:parseInt(req.body.hard.replace(/\'|\#|\/\*/g,"")),
            recommand:parseInt(req.body.recommand.replace(/\'|\#|\/\*/g,"")),
            course_name:req.body.course_name.replace(/\'|\#|\/\*/g,""),
            teacher:req.body.teacher.replace(/\'|\#|\/\*/g,""),
            user_id: userid
        }
        db.Insert('course_rate',rate,function(err,results){
            if (err) throw err;
            column = ['id'];
            db.FindbyColumn('course_new', column, { '課程名稱': req.body.course_name, '老師': req.body.teacher }, function (DbSearch) {
                if(DbSearch.length!=0){ // 有在course_new找到這門課, 則清掉該課程對應到的key就好
                    for(var d in DbSearch){
                        Delete_Id = "course_"+DbSearch[d].id;
                        console.log("Remove Redis Key: "+Delete_Id);
                        // redis.del(Delete_Id, function(err, result){
                        // });
                    }
                    res.send("success");
                }else{ // 沒找到這門課, 不做任何事
                    res.send("success");
                }
            });
        });        
    } else{
        res.redirect('../');
    }
});


module.exports = router;
