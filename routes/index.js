var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* root */
router.get('/', function(req, res) {
  res.redirect("/course");
});

module.exports = router;
