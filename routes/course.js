var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* index */
router.get('/', function(req, res) {
  console.log('\n'+'GET /course');
  /*  設定要的欄位 */
  var colmuns = ['id','課程名稱','系所名稱','老師','時間', 'get_post'];
  db.GetColumn('course',colmuns,{'column':'id','order':'DESC'},function(courses){
    if(req.user == undefined){
      res.render('course/index',{
        'courses':courses,
        'user': req.user,
        'carts':null   //沒登入 選課清單為null
      });
    }
    else{
      var userid = parseInt(req.user.id);
      var colmuns = ['course_id'];
      /* 有登入 抓取用戶的選課清單 */
      db.FindbyColumn('cart',['course_id'],{'user_id':userid},function(carts){
        res.render('course/index',{
          'courses':courses,
          'user': req.user,
          'carts':carts
        });
      });
    }
  });
});

/* show */
router.get('/:id', function(req, res) {
  var id = req.params.id;
  console.log('\n'+'GET /course/'+id);
  if(id.match(/\D/g)){
    res.redirect('/course');
  }
  else{
    /* 尋找課程的資訊 */
    db.query_post2(id, function(courseInfo, comment){

    // var comment_c = comment['comment'].filter(function (value) {
    //   return  value != "無" && value != "";
    // });
    // console.log(comment_c);
      courseInfo = courseInfo[0];
      courseInfo.comment = 0;
      courseInfo.course_style = 0;
      courseInfo.report_hw = 0;
      courseInfo.score_style = 0;

      for(var i in comment){
        for(var j in comment[i]){
          var buf = comment[i];
          if(buf[j] == "無" || buf[j] == ""){
            delete buf[j];
            continue;
          }
          courseInfo[j]++;
        }
      }
      if(req.user == undefined){
        res.render('course/show', {
          'courseInfo': courseInfo,
          'comment': comment,
          'user': req.user,
          'carts':null
        })
      }
      else{
        var userid = parseInt(req.user.id);
        var colmuns = ['course_id'];
        /* 有登入 抓取用戶的選課清單 */
        db.FindbyColumn('cart',['course_id'],{'user_id':userid},function(carts){
          res.render('course/show',{
            'courseInfo': courseInfo,
            'comment': comment,
            'user': req.user,
            'carts':carts
          });
        });
      }
    });

    // db.FindbyID('course',id,function(course){
    //   /* 尋找跟課程相關的心得文 */
    //   db.FindbyColumnOrder('post',{'course_id':parseInt(id)},{'column':'semester','order':'DESC'},function(posts){
    //     res.render('course/show',{
    //       'course':course,
    //       'posts':posts,
    //       'user': req.user
    //     });
    //   });
    // });
  }
});

/* add course */
router.post('/addcourse/:id', function(req, res) {
  var courseid =parseInt(req.params.id);
  console.log('\n'+'POST /course/addcourse/'+courseid);
  if(req.user == undefined){
    console.log('No login');
    res.send('No login');
  }
  else{
    var userid = parseInt(req.user.id);
    var name = req.user.name;
    console.log("選課者: "+name);
    /* 確認是否選過課了 */
    db.FindbyColumn('cart',["id"],{'user_id':userid,'course_id':courseid},function(carts){
      if(carts.length > 0 ){
        console.log('Already choose');
        res.send('Already choose');
      }
      else{
        /* 新增選課紀錄 */
        var cart ={
          user_id:userid,
          course_id:courseid
        }
        db.Insert('cart',cart,function(err,results){
          if(err) throw err;
          console.log('Choose course ' + courseid + ' success');
          res.send('success');
        });
      }
    });
  }
});

/* del course*/
router.post('/delcourse/:id', function(req,res) {
  var courseid = parseInt(req.params.id);
  var userid = parseInt(req.user.id);
  var name = req.user.name;
  console.log('\n'+'DELETE /course/delcourse/'+courseid);
  console.log("退課者: "+name);
  db.DeleteByColumn('cart',{'course_id':courseid,'user_id':userid},function(err){
    res.send('Success');
  });
});

/* input add course */
router.post('/inputaddcourse/:courseid', function(req, res) {
  var courseserial = req.params.courseid.toUpperCase();
  console.log('\n'+'POST /course/inputaddcourse/'+courseserial);
  var column=["id","課程名稱","時間"];
  /* 透過輸入的選課序號 查找課程 */
  db.FindbyColumn('course',column,{'選課序號':courseserial},function(course){
    /* 若該選課序號無對應的課程 回傳not found */
    if(course.length==0){
      console.log("Course "+courseserial+" not found");
      res.send("Not found");
    }
    /* 有找到課程 則傳送課程資訊 */
    else{
      var courseid = course[0].id
      /* 若用戶非登入 則直接傳送課程資訊 */
      if(req.user == undefined){
        res.send(course);
      }
      else{
        var userid = parseInt(req.user.id);
        var name = req.user.name;
        console.log("選課者: "+name);
        /* 確認是否選過課了 */
        db.FindbyColumn('cart',["id"],{'user_id':userid,'course_id':courseid},function(carts){
          /* 用戶清單中有該課程 */
          if(carts.length > 0 ){
            console.log('Already choose');
            res.send('Already choose');
          }
          else{
            /* 新增選課紀錄 */
            var cart ={
              user_id:userid,
              course_id:courseid
            }
            db.Insert('cart',cart,function(err,results){
              res.send(course);
            });
          }
        });
      }
    }
  });
});

module.exports = router;
