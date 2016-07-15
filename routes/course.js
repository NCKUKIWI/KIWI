var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* index */
router.get('/', function(req, res) {
  console.log('\n'+'GET /course');
  /*  設定要的欄位 */
  var colmuns = ['id','課程名稱','系所名稱','老師','時間'];
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
      //有登入 抓取用戶的選課清單
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
    db.FindbyID('course',id,function(course){
      /* 尋找跟課程相關的心得文 */
      db.FindbyColumnOrder('post',{'course_id':parseInt(id)},{'column':'semester','order':'DESC'},function(posts){
        res.render('course/show',{
          'course':course,
          'posts':posts,
          'user': req.user
        });
      });
    });
  }
});

/* add course */
router.post('/addcourse/:id', function(req, res) {
  var courseid =parseInt(req.params.id);
  console.log('\n'+'POST /addcourse/'+courseid);
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
  console.log('\n'+'DELETE /delcourse/'+courseid);
  db.DeleteByColumn('cart',{'course_id':courseid,'user_id':userid},function(err){
    res.send('Success');
  });
});

module.exports = router;
