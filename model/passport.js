var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('../config');
var database = require('./dba');

//Passport
//step 1
//Call back url for Dev "http://localhost:3000/user/auth/facebook/callback",
passport.use(new FacebookStrategy({
    clientID: config.fbappid,
    clientSecret: config.fbsecret,
    callbackURL:"http://nckuhub.com/user/auth/facebook/callback",
    profileFields: ['id', 'displayName']
  },
  function(accessToken, refreshToken, profile, cb){
    var db = new database();
    db.select().field('id').from('user').where("fb_id=",profile.id).run(function(users){
      if(users.length > 0 ){
        cb(null,users[0]);
      }
      else{
        var user ={
          fb_id:profile.id,
          name:profile.displayName,
        }
        db.insert().into('user').set(user).run(function(result){
          db.select().field("*").from("user").where("id="+results.insertId).run(function(user){
            db=null;
            delete db;
            cb(null,user[0]);
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
  var db = new database();
  db.select().field("*").from("user").where("id=",id).run(function(user){
    db=null;
    delete db;
    done(null,user[0]);
  });
});

module.exports = passport;
