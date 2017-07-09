var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* course_rate form */
router.get('/new/:id', function(req, res) {
  console.log('\n'+'GET /course_rate/new/'+req.params.id);
  if(req.user == undefined){
    console.log('No login');
    res.send('No login');
  }
  else{
    res.render('course_rate/new',{
      'course_name':req.body.course_name.replace(/\'|\#|\/\*/g,""),
      'teacher':req.body.teacher.replace(/\'|\#|\/\*/g,"")
    });
  }
});

router.post('/create', function(req, res) {
  console.log('\n'+'POST /course_rate/create');
  if(req.user == undefined){
    res.redirect('../');
  }
  else{
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
      res.send("success");
    });
  }
});

router.delete('/:id', function(req, res) {
  console.log('\n'+'DELETE /course_rate/'+req.params.id);
  var id = req.params.id;
  db.DeleteById('course_rate',id,function(err){
    res.send('Success');
  });
});

module.exports = router;
