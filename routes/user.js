var express = require('express');
var router = express.Router();
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
                        req.session.isLogin = true;
                        req.session.user = user[0];
                        res.redirect("/");
                    } else {
                        db.Insert('user', {
                            'name': fb.name,
                            'fb_id': fb.id,
                            'role': 0,
                            'department': '無',
                            'grade': '無'
                        }, function (err, result) {
                            if (err) return console.log(err);
                            req.session.isLogin = true;
                            req.session.user = result;
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
    req.session.destroy(err => {
        if (err) console.error(err);
    });
    res.redirect('/');
});

router.get('/edit', middleware.checkLogin(), function (req, res) {
    console.log('\n' + 'GET /user/edit');
    res.render('user/edit', {
        'user': req.session.user
    });
});

router.post('/update', middleware.checkLogin(), function (req, res) {
    console.log('\n' + 'POST /user/update');
    var userid = req.session.user.id;
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