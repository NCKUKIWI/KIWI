var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* index  */
router.get('/', function(req, res) {
  res.redirect('../');
});

/* create */
router.post('/create', function(req, res) {
  console.log('POST /post/create');
  var userid = req.user.id;
  console.log('User_id: '+req.user.id);
  req.checkBody('coursename', '課程名稱不可為空').notEmpty();
  req.checkBody('teacher', '老師名稱不可為空').notEmpty();
  req.checkBody('comment', '修課心得不可為空').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    res.send(errors);
  }else{
    var post = {
      course_name:req.body.coursename.replace(/\'|\#|\/\*/g,""),
      teacher:req.body.teacher.replace(/\'|\#|\/\*/g,""),
      semester:req.body.semester.replace(/\'|\#|\/\*/g,""),
      catalog:req.body.catalog.replace(/\'|\#|\/\*/g,""),
      comment:req.body.comment.replace(/\n/g,"<br>").replace(/\'|\#|\/\*/g,""),
      report_hw:req.body.report_hw.replace(/\'|\#|\/\*/g,""),
      exam_style: req.body.exam_style.replace(/\'|\#|\/\*/g,""),
      score_style:req.body.score_style.replace(/\'|\#|\/\*/g,""),
      course_need: req.body.course_need.replace(/\'|\#|\/\*/g,""),
      course_style:req.body.course_style.replace(/\'|\#|\/\*/g,""),
      user_id: userid
    }
    db.Insert('post',post,function(err,result){
      if(err) throw err;
      res.send("success");
    });
  }
});

/* show */
router.get('/:id', function(req, res) {
  var id = req.params.id;
  console.log('GET /post/'+id);
  db.FindbyID('post',id,function(data){
    res.render('post/show',{'data':data,'user': req.user });
  });
});

/* edit */
router.get('/edit', function(req, res) {

});

/* update */
router.post('/update', function(req, res) {

});

/* del */
router.delete('/:id', function(req,res) {
  var id = req.params.id;
  var sql= "DELETE FROM post WHERE id = "+id;
  console.log("DELETE post/"+id);
  db.DeleteById('post',id,function(err){
    res.send('Success');
  });
});

module.exports = router;
