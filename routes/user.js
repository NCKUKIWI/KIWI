var express = require('express');
var router = express.Router();
var cache = require('../helper/cache').redis;
var userCacheKey = require('../helper/cache').userCacheKey;
var middleware = require('../middleware');
var db = require('../model/db');
var graph = require("fbgraph");
var config = require('../config');

router.get("/fblogin", middleware.checkLogin(1), function (req, res) {
    res.redirect(`https://www.facebook.com/v3.1/dialog/oauth?client_id=${config.fb.appid}&scope=email,public_profile&response_type=code&redirect_uri=${config.website}/user/fbcheck`);
});

router.get("/fbcheck", middleware.checkLogin(1), function (req, res) {
    if (req.query.code) {
        graph.authorize({
            "client_id": config.fb.appid,
            "redirect_uri": config.website + "/user/fbcheck",
            "client_secret": config.fb.secret,
            "code": req.query.code
        }, function (err, result) {
            graph.get(`/me?fields=id,name&access_token=${result.access_token}`, function (err, fb) {
                db.FindbyColumn('user', ['id', 'fb_id'], {
                    'fb_id': fb.id
                }, function (user) {
                    if (user.length > 0) {
                        res.cookie("isLogin", 1, {
                            maxAge: 60 * 60 * 1000
                        });
                        res.cookie("id", user[0].id, {
                            maxAge: 60 * 60 * 1000
                        });
                        res.redirect("/");
                    } else {
                        db.Insert('user', {
                            'name': fb.name,
                            'fb_id': fb.id,
                            'role': 0,
                            'department': '無',
                            'grade': '無'
                        }, function (err, result) {
                            if (err) console.log(err);
                            res.cookie("isLogin", 1, {
                                maxAge: 60 * 60 * 1000
                            });
                            res.cookie("id", result.insertId, {
                                maxAge: 60 * 60 * 1000
                            });
                            res.redirect("/");
                        })
                    }
                });
            });
        });
    } else {
        res.redirect("/");
    }
});

router.get('/logout', function (req, res) {
    cache.del(userCacheKey(req.user.id));
    res.clearCookie("isLogin");
    res.clearCookie("id");
    res.redirect('/');
});

router.get('/edit', middleware.checkLogin(), function (req, res) {
    console.log('\n' + 'GET /user/edit');
    res.send({
        'user': req.user
    });
});

router.get('/getList/:userID', function (req, res) {
    var userID = req.params.userID;
    console.log('\n' + 'GET /course/' + userID);
    if (userID.match(/\D/g)) { // if ID isn't the digital.
        res.redirect('/');
    }else{
        db.Query('SELECT userName, courseID FROM `tableList` WHERE userID='+userID ,function(name_table){
            db.Query('SELECT courseID FROM `wishList` WHERE userID='+userID,function(wish){
                console.log(name_table)
                if(name_table.length === 0){
                    db.FindbyColumn('user', ['name'], {'id' :userID}, function(name){
                        console.log(name)
                        data = {'name': name, 'now_wishlist':[], 'now_table':[]}
                        res.json(data)
                    })
                }else{
                    data = {'name': name_table[0]['userName'], 'now_wishlist':[], 'now_table':[]}
                    for (let n in name_table){
                        console.log(name_table[n])
                        data['now_table'].push(name_table[n]['courseID'])
                    }
                    for (let w in wish){
                        data['now_wishlist'].push(wish[w]['courseID'])
                    }
                    res.json(data)
                }      
            })
        
        })
    }   
    console.log('hi')
});

router.post('/update', middleware.checkLogin(), function (req, res) {
    console.log('\n' + 'POST /user/update');
    var userid = req.user.id;
    var user = {
        name: req.body.name,
        department: req.body.department,
        grade: req.body.grade
    }
    db.Update('user', user, {
        'id': parseInt(userid)
    }, function (results) {
        res.send('success');
    });
});

module.exports = router;