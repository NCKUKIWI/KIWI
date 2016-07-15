var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* index  */
router.get('/', function(req, res) {
  console.log('\n'+'GET /schedule');
  if(req.user == undefined){
    res.render('schedule/index',{
      'user': req.user,
      'carts':null   //沒登入 選課清單為null
    });
  }
  else{
    var userid = parseInt(req.user.id);
    var colmuns = ['course_id'];
    //有登入 抓取用戶的選課清單
    var tables = {'table':'cart','jointable':'course'};
    var cols = ['course.id','course.課程名稱','course.時間'];
    var conditions = {'cart.user_id':userid,'course.id':'cart.course_id'};
    db.InnerJoin(tables,cols,conditions,function(carts){
      res.render('schedule/index',{
        'user': req.user,
        'carts':carts
      });
    });
  }
});

module.exports = router;
