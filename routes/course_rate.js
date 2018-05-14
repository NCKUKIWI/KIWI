var express = require('express');
var router = express.Router();
var redis = require('../helper/cache').redis;
var db = require('../model/db');

/* course_rate form */
router.get('/new/:id', function(req, res) {
    console.log('\n'+'GET /course_rate/new/'+req.params.id);
    if(req.user){
        res.render('course_rate/new',{
            'courseid':req.params.id,
            'course_name':req.query.course_name.replace(/\'|\#|\/\*/g,""),
            'teacher':req.query.teacher.replace(/\'|\#|\/\*/g,"")
        });
    }
    else{
        res.send('No login');
    }
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
            if(err) throw err;
            redis.flushdb( function (err, result) {
                res.send("success");
            });
        });
    } else{
        res.redirect('../');
    }
});

router.delete('/:id', function(req, res) {
    console.log('\n'+'DELETE /course_rate/'+req.params.id);
    var id = req.params.id;
    db.DeleteById('course_rate',id,function(err){
        redis.flushdb( function (err, result) {
            res.send("success");
        });
    });
});

module.exports = router;
