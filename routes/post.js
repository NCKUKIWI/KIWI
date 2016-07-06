var express = require('express');
var router = express.Router();
var connection = require('../config');
connection = connection.connection;

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
});

module.exports = router;
