var express = require('express');
var router = express.Router();
var pg = require('pg');
var db = require('../model/db');
var config = require('../config');
/*

insert

client.query("INSERT INTO emps (firstname, lastname) values($1, $2)", ['Ronald', 'McDonald']);

*/

/* create */
router.post('/create', function(req, res) {
  var coursename = req.body.coursename;
  var teacher = req.body.teacher;
  var semester =req.body.semester;
  var catalog = req.body.catalog;
  var comment = req.body.comment.replace(/\n/g,"<br>"); // replace \n to <br>
  var report_hw = req.body.report_hw;
  var exam_style = req.body.exam_style;
  var score_style = req.body.score_style;
  var course_need = req.body.course_need;
  var course_style = req.body.course_style;

  console.log('POST post/create');

  pg.connect(config.dburl, function(err, client, done) {
    if (err) throw err;
    client.query("INSERT INTO post (course_name,teacher,semester,catalog,comment,report_hw,exam_style,score_style,course_need,course_style) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)"
    ,[coursename,teacher,semester,catalog,comment,report_hw,exam_style,score_style,course_need,course_style],function (err, result) {
      if (err) throw err;
      done();
      console.log("Create Success");
      res.redirect('/');
    });
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
});

module.exports = router;
