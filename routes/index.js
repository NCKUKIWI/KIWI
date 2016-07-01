var express = require('express');
var pg = require('pg');
var router = express.Router();
/*
--conect db--
pg.connect(process.env.DATABASE_URL, function(err, client, done) {

});
*/

router.get('/', function(req, res) {
  console.log("GET '/'");
  res.render('index');
});

module.exports = router;
