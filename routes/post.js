var express = require('express');
var pg = require('pg');
var router = express.Router();
/*
--conect db--
pg.connect(process.env.DATABASE_URL, function(err, client, done) {

});
*/

/* index */
router.get('/', function(req, res) {
  console.log("GET /post");
  res.render('post/index');
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
