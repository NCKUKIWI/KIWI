var express = require('express');
var pg = require('pg');
var router = express.Router();
/*
--conect db--
pg.connect(process.env.DATABASE_URL, function(err, client, done) {

});
*/
/* root */
router.get('/', function(req, res) {
  console.log("GET '/'");
  res.render('post/index');
});

module.exports = router;
