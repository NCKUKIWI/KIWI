var express = require('express');
var pg = require('pg');
var router = express.Router();
var db = require('./db');
/*
--conect db--
pg.connect(process.env.DATABASE_URL, function(err, client, done) {

});
*/

/* root */
router.get('/', function(req, res) {
  console.log("GET '/'");
  pg.connect(db.url, function(err, client, done) {
    if (err) throw err;
    client.query('SELECT course_name,teacher,catalog,semester FROM post', function (err, result) {
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

module.exports = router;
