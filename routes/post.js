var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* index  */
router.get('/', function(req, res) {
  res.redirect('../');
});

/* create */
router.post('/create', function(req, res) {
  console.log('\n'+'POST /post/create');
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
    db.Insert('post',post,function(err,results){
      if(err) throw err;
      res.send("success");
    });
  }
});

/* show */
router.get('/:id', function(req, res) {
  var id = req.params.id;
  if(id.match(/\D/g)){
    console.log('\n'+'GET /post/'+id);
    res.redirect('../');
  }
  else{
    console.log('\n'+'GET /post/'+id);
    db.FindbyID('post',id,function(data){
      res.render('post/show',{'data':data,'user': req.user });
    });
  }
});

/* edit */
router.get('/edit', function(req, res) {

});

/* update */
router.post('/update', function(req, res) {

});

/*report post */
router.post('/report/:id', function(req,res) {
  /* 要檢舉的文章id*/
  var postid = parseInt(req.params.id);
  console.log('\n'+'PUT post/report/'+postid);
  /* 檢查用戶是否登入 */
  if(req.user !== undefined){
    var name = req.user.name;
    var userid = parseInt(req.user.id);
    console.log('檢舉者：'+ name)
    /* 檢查是否檢舉過 依照user的name及post_id去尋找 */
    db.FindbyColumn('report_post',{'post_id':postid,'user_id':userid},function(datas){
      if(datas.length > 0 ){
        console.log('Already report');
        res.send('Already report');
      }
      else{
        /* 新增檢舉紀錄 */
        var report_post ={
          user_id:userid,
          post_id:postid
        }
        db.Insert('report_post',report_post,function(err,results){
          if(err) throw err;
          console.log('Report post ' + postid + ' success');
          /* 依照post_id將文章的檢舉次數+1 */
          db.UpdatePlusone('post','report_count',postid,function(results){
            res.send('Success');
          });
        });
      }
    });
  }
  else{
    console.log('Not login');
    res.send('Not Login');
  }
});

/* del */
router.delete('/:id', function(req,res) {
  var id = req.params.id;
  var sql= "DELETE FROM post WHERE id = "+id;
  console.log('\n'+'DELETE post/'+id);
  db.DeleteById('post',id,function(err){
    res.send('Success');
  });
});

module.exports = router;
