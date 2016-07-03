var express = require('express');
var router = express.Router();
var pg = require('pg');
var db = require('../model/db');
var config = require('../config');
/*

insert

client.query("INSERT INTO emps (firstname, lastname) values($1, $2)", ['Ronald', 'McDonald']);

*/

/* index */
router.get('/', function(req, res) {
  console.log("GET '/'");
  db.getall('post',function(datas){
    res.render('post/index',{'data':datas});
  });
});

/* show */
router.get('/:id', function(req, res) {
  console.log("GET /post/"+req.params.id);
  db.findbyID('post',req.params.id,function(datas){
    res.render('post/show',{'data':datas});
  });
});

/* new */
router.get('/new', function(req, res) {
  res.render('post/new');
});

/* create */
router.post('/create', function(req, res) {
  var coursename = req.body.coursename;
  var teacher = req.body.teacher;
  var semester =req.body.semester;
  var catalog = req.body.catalog;
  var comment = req.body.comment;

  pg.connect(config.dburl, function(err, client, done) {
    if (err) throw err;
    client.query("INSERT INTO post (course_name,teacher,semester,catalog,comment) VALUES ($1,$2,$3,$4,$5)",[coursename,teacher,semester,catalog,comment],function (err, result) {
      if (err) throw err;
      done();
      console.log(result);
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

});

module.exports = router;
