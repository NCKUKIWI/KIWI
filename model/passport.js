var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('../config');
var db = require('./db');

//Passport
//step 1
passport.use(new FacebookStrategy({
    clientID: config.fbappid,
    clientSecret: config.fbsecret,
    callbackURL:"http://nckuhub.com/user/auth/facebook/callback",
    profileFields: ['id', 'displayName']
  },
  function(accessToken, refreshToken, profile, cb) {
      var user ={
        fb_id:profile.id,
        name:profile.displayName,
      }
      db.FindbyColumn('user',{'fb_id':profile.id},function(datas){
        if(datas.length > 0 ){
          cb(null,datas[0]);
        }
        else{
          db.Insert('user',user,function(err,results){
            if(err) throw err;
            db.FindbyID('user',results.insertId,function(data){
              cb(null,data);
            });
          });
        }
      });
  }
));

//step 2
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

//step 3
passport.deserializeUser(function(id, done) {
  db.FindbyID('user',id,function(data){
    done(null,data);
  });
});

module.exports = passport;
