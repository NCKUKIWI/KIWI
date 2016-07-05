var express = require('express');
var router = express.Router();
var connection = require('../config');
connection = connection.connection;
/*

insert

client.query("INSERT INTO emps (firstname, lastname) values($1, $2)", ['Ronald', 'McDonald']);

*/
/* index  */
router.get('/', function(req, res) {
  res.redirect('../');
});

/* create */
router.post('/create', function(req, res) {
  console.log('POST post/create');
  var post = {
    course_name:req.body.coursename,
    teacher:req.body.teacher,
    semester:req.body.semester,
    catalog:req.body.catalog,
    comment:req.body.comment.replace(/\n/g,"<br>"),
    report_hw:req.body.report_hw,
    exam_style: req.body.exam_style,
    score_style:req.body.score_style,
    course_need: req.body.course_need,
    course_style:req.body.course_style,
    user_id: req.user.id
  }
  connection.query("INSERT INTO post SET ?",post,function(errs){
    if (errs) throw errs;
    res.redirect('/');
  });
  /*
  pg.connect(config.dburl, function(err, client, done) {
    if (err) throw err;
    client.query("INSERT INTO post (course_name,teacher,semester,catalog,comment,report_hw,exam_style,score_style,course_need,course_style,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)"
    ,[coursename,teacher,semester,catalog,comment,report_hw,exam_style,score_style,course_need,course_style,userid],
    function (err, result) {
      if (err) throw err;
      done();
      console.log("Create Success");
      res.redirect('/');
    });
  });
  */
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
  connection.query(sql,function(err, results, fields){
    if (err) throw err;
    console.log(sql);
    console.log("DELETE Success!");
    res.send('Success');
  });
  /*
  pg.connect(config.dburl, function(err, client, done) {
    if (err) throw err;
    client.query(sql,function (err, result) {
      if (err) throw err;
      done();
      console.log(sql);
      console.log("DELETE Success!");
      res.send('Success');
    });
  });
  */
});

module.exports = router;
