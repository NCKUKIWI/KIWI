var express = require('express');
var pg = require('pg');
var router = express.Router();
var db = require('./db');
/*
--conect db--
pg.connect(process.env.DATABASE_URL, function(err, client, done) {

});
*/

/* index */
router.get('/', function(req, res) {
  console.log("GET '/'");
  pg.connect(db.url, function(err, client, done) {
    if (err) throw err;
    client.query('SELECT id,course_name,teacher,catalog,semester FROM post', function (err, result) {
      if (err) throw err;
      var data = result.rows;
      var count = result.rowCount;
      console.log(count);
      res.render('post/index',{'data':data});
      client.end(function (err) {
        if (err) throw err;
      });
    });
  });
});

/* show */
router.get('/:id', function(req, res) {
  console.log("GET /post/"+req.params.id);
  pg.connect(db.url, function(err, client, done) {
    if (err) throw err;
    client.query('SELECT * FROM post WHERE id ='+req.params.id, function (err, result) {
      if (err) throw err;
      var data = result.rows;
      res.render('post/show',{'data':data});
      client.end(function (err) {
        if (err) throw err;
      });
    });
  });
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
