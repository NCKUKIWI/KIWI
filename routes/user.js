var express = require('express');
var router = express.Router();
var db = require('../model/db');
var passport = require('../model/passport');

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '../../../',
    successFlash: '登入成功!',
    failureRedirect: '../../../',
    failureFlash: '請重新再試一次!',
  })
);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/edit', function(req, res){
  if(req.user == undefined) res.redirect('../');
  console.log('\n'+'GET /user/edit');
  res.render('user/edit',{
    'user':req.user
  });
});

router.post('/update', function(req, res){
  if(req.user == undefined) res.redirect('../');
  console.log('\n'+'POST /user/update');
  var userid = req.user.id;
  var user = {
    name:req.body.name,
    department:req.body.department,
    grade:req.body.grade
  }
  db.Update('user',user,{'id':parseInt(userid)},function(results){
    res.send('success');
  });
});

module.exports = router;
