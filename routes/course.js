var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* index */
router.get('/', function(req, res) {
  console.log('\n'+'GET /course');
  /*  設定要的欄位 */
  var colmuns = ['id','課程名稱','系所名稱','老師','時間'];
  db.GetColumn('course',colmuns,{'column':'id','order':'DESC'},function(courses){
    res.render('course/index',{
      'courses':courses,
      'user': req.user
    });
  });
});

/* show */
router.get('/:id', function(req, res) {
  var id = req.params.id;
  if(id.match(/\D/g)){
    console.log('\n'+'GET /course/'+id);
    res.redirect('/course');
  }
  else{
    console.log('\n'+'GET /course/'+id);
    db.FindbyID('course',id,function(course){
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

module.exports = router;
