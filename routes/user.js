var express = require('express');
var router = express.Router();

router.get('/s', function(req, res) {
  res.render('user');
});

module.exports = router;
