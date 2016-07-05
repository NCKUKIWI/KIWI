var express = require('express');
var router = express.Router();
var pg = require('pg');
var db = require('../model/db');
var config = require('../config');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

//Passport
passport.use(new FacebookStrategy({
    clientID: config.fbappid,
    clientSecret: config.fbsecret,
    callbackURL: "http://localhost:3000/user/auth/facebook/callback",
    profileFields: ['id', 'displayName']
  },
  function(accessToken, refreshToken, profile, cb) {
      var user ={
        id:profile.id,
        name:profile.displayName,
      }
      cb(null,user);
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

module.exports = router;
