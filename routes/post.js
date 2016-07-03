var express = require('express');
var router = express.Router();
var db = require('../model/db');

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
  console.log(req.body.coursename);
  console.log(req.body.teacher);
  res.redirect('/'); 
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
