var express = require('express');
var router = express.Router();
var database =  require('./firebase');

router.get('/', function(req, res) {
  database.ref('post').on('value', function(snapshot) {
    var data = snapshot.val();
    res.render('post/index',{"data":data});
  });
});

module.exports = router;
