var express = require('express');
var router = express.Router();
var database =  require('./firebase');

/* index */
router.get('/', function(req, res) {
  console.log("GET /post");
  database.ref('post').on('value', function(snapshot) {
    var data = snapshot.val();
    res.render('post/index',{"data":data});
  });
});

/* show */
router.get('/:id', function(req, res) {
  console.log("GET /post/"+req.params.id);
  res.render('post/index');
});

/* new */
router.get('/new', function(req, res) {
  res.render('post/new');
});

/* create */
router.post('/create', function(req, res) {

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
