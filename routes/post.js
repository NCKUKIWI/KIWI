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
  if(req.user == undefined){
    res.redirect('../');
  }
  else{
    var userid = parseInt(req.user.id);
    var courseid = parseInt(req.body.course_id.replace(/\'|\#|\/\*/g,""));
    console.log('User_id: '+req.user.id);
    req.checkBody('comment', '修課心得不可為空').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
      console.log("error");
      res.send(errors);
    }
    else{
      var post = {
        course_name:req.body.course_name.replace(/\'|\#|\/\*/g,""),
        teacher:req.body.teacher.replace(/\'|\#|\/\*/g,""),
        semester:req.body.semester.replace(/\'|\#|\/\*/g,""),
        catalog:req.body.catalog.replace(/\'|\#|\/\*/g,""),
        comment:req.body.comment.replace(/\n/g,"<br>").replace(/\'|\#|\/\*/g,""),
        report_hw:req.body.report_hw.replace(/\'|\#|\/\*/g,""),
        course_style:req.body.course_style.replace(/\'|\#|\/\*/g,""),
        course_id:courseid,
        user_id: userid
      }
      db.Insert('post',post,function(err,results){
        if(err) throw err;
        var rate = {
          sweet:parseInt(req.body.sweet.replace(/\'|\#|\/\*/g,"")),
          hard:parseInt(req.body.hard.replace(/\'|\#|\/\*/g,"")),
          recommand:parseInt(req.body.recommand.replace(/\'|\#|\/\*/g,"")),
          course_id:courseid,
          user_id: userid
        }
        db.Insert('course_rate',rate,function(err,results){
          if(err) throw err;
          res.send("success");
        });
      });
    }
  }
});

/* new */
router.get('/new', function(req, res) {
  console.log('\n'+'GET /post/new');
  if(req.user == undefined){
    res.render('post/new',{
      'course': null,
      'user': req.user
    });
  }
  else{
    var colmuns = ['id','課程名稱','老師','時間','系所名稱'];
    db.GetColumn('course',colmuns,{'column':'id','order':'DESC'},function(course){
      res.render('post/new',{
        'course': course,
        'user': req.user
      });
    });
  }
});

/* show */
router.get('/:id', function(req, res) {
  var id = req.params.id;
  if(id.match(/\D/g)){
    console.log('\n'+'GET /post/'+id);
    res.redirect('/');
  }
  else{
    console.log('\n'+'GET /post/'+id);
    db.FindbyID('post',id,function(post){
      res.render('post/show',{
        'post':post,
        'user': req.user
      });
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
  console.log('\n'+'POST /post/report/'+postid);
  /* 檢查用戶是否登入 */
  if(req.user !== undefined){
    var name = req.user.name;
    var userid = parseInt(req.user.id);
    console.log('檢舉者：'+ name)
    /* 檢查是否檢舉過 依照user_id及post_id去尋找 */
    db.FindbyColumn('report_post',["id"],{'post_id':postid,'user_id':userid},function(reports){
      if(reports.length > 0 ){
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
  console.log('\n'+'DELETE post/'+id);
  db.DeleteById('post',id,function(err){
    res.send('Success');
  });
});

module.exports = router;
