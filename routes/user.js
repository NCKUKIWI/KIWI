var express = require('express');
var router = express.Router();
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

module.exports = router;
