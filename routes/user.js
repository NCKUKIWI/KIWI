var express = require('express');
var router = express.Router();
var helper = require('../helper');
var db = require('../model/db');
var graph = require("fbgraph");
var config = require('../config');

router.get("/fblogin",helper.checkLogin(1),function(req, res) {
  res.redirect(`https://www.facebook.com/v2.8/dialog/oauth?client_id=${config.fbappid}&scope=email,public_profile&response_type=code&redirect_uri=${config.website}/user/fbcheck`);
});

router.get("/fbcheck",helper.checkLogin(1),function(req,res) {
  if(req.query.code){
    graph.authorize({
      "client_id": config.fbappid,
      "redirect_uri": config.website+"/user/fbcheck",
      "client_secret": config.fbsecret,
      "code": req.query.code
    }, function (err,result) {
      graph.get(`/me?fields=id,name,email,gender&access_token=${result.access_token}`,function(err,fb){
        db.FindbyColumn('user',['id','fb_id'],{'fb_id':fb.id},function(user){
          if(user.length>0){
            req.session.isLogin = 1;
            req.session.userid = user[0].id;
            res.redirect("/");
          }
          else{
            db.Insert('user',{'name':fb.name,'fb_id':fb.id,'role':0,'department':'無','grade':'無'},function (err,result) {
              if (err) console.log(err);
              req.session.isLogin = 1;
              req.session.userid = result.insertId;
              res.redirect("/");
            })
          }
        });
      });
    });
  }
  else{
    res.redirect("/");
  }
});

router.get('/logout',function(req, res){
    req.session.destroy(function(err) {
        res.redirect('/');
    });
});

router.get('/edit',helper.checkLogin(),function(req, res){
  console.log('\n'+'GET /user/edit');
  res.render('user/edit',{
    'user':req.user
  });
});

router.post('/update',helper.checkLogin(),function(req, res){
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
