var express = require('express');
var router = express.Router();
var helper = require('../helper');
var User = require('../model/User');
var graph = require("fbgraph");
var config = require('../config');

router.get("/fblogin", helper.checkLogin(1), function(req, res) {
  res.redirect(`https://www.facebook.com/v2.8/dialog/oauth?client_id=${config.fbappid}&scope=email,public_profile&response_type=code&redirect_uri=${config.website}/user/fbcheck`);
});

router.get("/fbcheck", helper.checkLogin(1), function(req, res) {
  if(req.query.code) {
    graph.authorize({
      "client_id": config.fbappid,
      "redirect_uri": config.website + "/user/fbcheck",
      "client_secret": config.fbsecret,
      "code": req.query.code
    }, function(err, result) {
      graph.get(`/me?fields=id,name,email,gender&access_token=${result.access_token}`, function(err, fb) {
        User.findOrCreate({
          where: { fb_id: fb.id },
          defaults: { 'name': fb.name, 'role': 0, 'department': '無', 'grade': '無' }
        }).spread(function(user, created) {
          res.cookie("isLogin", 1, { maxAge: 60 * 60 * 1000 });
          res.cookie("id", user[0].id, { maxAge: 60 * 60 * 1000 });
          res.redirect("/");
        });
      });
    });
  } else {
    res.redirect("/");
  }
});

router.get('/logout', function(req, res) {
  res.clearCookie("isLogin");
  res.clearCookie("id");
  res.redirect('/');
});

router.get('/edit', helper.checkLogin(), function(req, res) {
  console.log('\n' + 'GET /user/edit');
  res.render('user/edit', {
    'user': req.user
  });
});

router.post('/update', helper.checkLogin(), function(req, res) {
  console.log('\n' + 'POST /user/update');
  var newUser = {
    name: req.body.name,
    department: req.body.department,
    grade: req.body.grade
  }
  User.update(user,{ 
    where: { id: parseInt(req.user.id) } 
  }).then(function(result){
    res.send('ok');
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
