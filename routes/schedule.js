var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* index  */
router.get('/', function(req, res) {
  console.log('\n'+'GET /schedule');
  res.render('schedule/index',{'user': req.user});
});

module.exports = router;
