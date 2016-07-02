var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* root */
router.get('/', function(req, res) {
  console.log("GET '/'");
  db.getall('post',function(datas){
    res.render('post/index',{'data':datas});
  });
});

module.exports = router;
