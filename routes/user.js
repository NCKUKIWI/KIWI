var express = require('express');
var router = express.Router();
var db = require('../model/db');
var config = require('../config');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

//Passport
passport.use(new FacebookStrategy({
    clientID: config.fbappid,
    clientSecret: config.fbsecret,
    callbackURL:"http://ec2-52-197-130-40.ap-northeast-1.compute.amazonaws.com/user/auth/facebook/callback",
    profileFields: ['id', 'displayName']
  },
  function(accessToken, refreshToken, profile, cb) {
      var user ={
        fb_id:profile.id,
        name:profile.displayName,
      }
      db.findbyColumn('user','fb_id',profile.id,function(data){
        if(data.length > 0 ){
          cb(null,data[0]);
        }
        else{
          db.Insert('user',user,function(err,result){
            if(err) throw err;
            cb(null,result[0]);
          });
        }
      });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '../../../',
    failureRedirect: '/login'
  })
);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
