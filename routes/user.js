var express = require('express');
var router = express.Router();
var cache = require('../helper/cache').redis;
var userCacheKey = require('../helper/cache').userCacheKey;
var middleware = require('../middleware');
var db = require('../model/db');
var graph = require("fbgraph");
var config = require('../config');
var cache = require('../helper/cache');
var redis = require('../helper/cache').redis;
var gmailSend = require('./gmailSend/gmailSend')

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
                db.FindbyColumn('user', ['id', 'check_key', 'fb_id'], {
                    'fb_id': fb.id
                }, function (user) {
                    if (user.length > 0) {
                        res.cookie("isLogin", 1, {
                            maxAge: 1000 * 60 * 60 * 12 * 2 * 30
                        });
                        res.cookie("id", user[0].check_key, {
                            maxAge: 1000 * 60 * 60 * 12 * 2 * 30
                        });
                        console.log("======user======");
                        console.log(user);
                        // res.send(user);
                        res.redirect('/');
                    } else {
                    	var check_key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                        var code = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                        code = 'nckuhub' + code.substring(1, 14);
                        while (code.length != 20){
                            code = 'nckuhub' + Math.random().toString(36).substring(2, 15);
                        }
                        db.Insert('user', {
                            'name': fb.name,
                            'fb_id': fb.id,
                            'role': 0,
                            'department': 'new',
                            'grade': 'new',
                            'check_key': check_key,
                            'email': "new"
                        }, function (err, result) {
                            if (err) console.log(err);
                            db.Insert('messenger_code', {
                                'code': code,
                                'user_id': result.insertId
                            }, function(err, result){
                                if (err) console.log(err);
                                res.cookie("isLogin", 1, {
                                    maxAge: 1000 * 60 * 60 * 12 * 2 * 30
                                });
                                res.cookie("id", check_key, {
                                    maxAge: 1000 * 60 * 60 * 12 * 2 * 30
                                });
                                console.log("======create user======");
                                console.log(result);
                                res.redirect('/');
                            })
                        })
                    }
                });
            });
        });
    } else {
        res.redirect('/');
    }
});

router.get('/logout', function (req, res) {
    redis.del(userCacheKey(req.user.id));
    res.clearCookie("isLogin");
    res.clearCookie("id");
    console.log("---user logout---");
    res.redirect('/');
});

router.get('/edit', middleware.checkLogin(), function (req, res) {
    console.log('\n' + 'GET /user/edit');
    res.json({
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
                data = {'now_wishlist':[], 'now_table':[]}
                for (let n in name_table){
                    console.log(name_table[n])
                    data['now_table'].push(name_table[n]['courseID'])
                }
                for (let w in wish){
                    data['now_wishlist'].push(wish[w]['courseID'])
                }
                res.json(data);
                // console.log(name_table)
                // if(name_table.length === 0){
                //     db.FindbyColumn('user', ['name'], {'id' :userID}, function(name){
                //         console.log(name)
                //         data = {'name': name, 'now_wishlist':[], 'now_table':[], 'photo':[]}
                //         res.json(data)
                //     })
                // }else{
                //     data = {'name': name_table[0]['userName'], 'now_wishlist':[], 'now_table':[], 'photo':[]}
                //     for (let n in name_table){
                //         console.log(name_table[n])
                //         data['now_table'].push(name_table[n]['courseID'])
                //     }
                //     for (let w in wish){
                //         data['now_wishlist'].push(wish[w]['courseID'])
                //     }
                //     res.json(data)
                // }      
            })
        
        })
    }   
});

router.get('/getDraft/:uid', function (req, res) {
    uid = req.params.uid;
    teacher = req.query.teacher;
    course = req.query.course;
    redis.get(cache.draftKey(course, teacher, uid),function (err, result) {
        res.send(result)
    });
});

router.post('/setDraft/:uid', function (req, res) {
    uid = req.params.uid;
    let data = req.body;
    redis.set(cache.draftKey(data["course"], data["teacher"], uid), JSON.stringify(data));
    res.send('done');
})


router.post('/delDraft/:uid', function (req, res) {
    uid = req.params.uid
    let data = req.body;
    redis.del(cache.draftKey(data["course"], data["teacher"], uid),function (error, result) {
        res.send('done')
    });
});


router.post('/update', middleware.checkLogin(), function (req, res) {
    console.log('\n' + 'POST /user/update');
    var userid = req.user.id;
    var user = {
        department: req.body.department,
        grade: req.body.grade,
        email: req.body.email
    }
    db.Update('user', user, {
        'id': parseInt(userid)
    }, function (results) {
        res.send('success');
    });
});

router.get('/info', function (req, res) {
    console.log('\n' + 'GET /user/info');
    if (req.user === undefined){
        res.status(404).send('not login');
    }
    else{
        res.send({user: req.user});    
    }
    
});

router.get('/findHelperService/', function (req, res) {
    var uid = req.user.id
    var data = {
        'messenger_code': "",
        'point': 0
    }
    db.Query('select * from messenger_code where user_id =' + uid, function(messenger_code){
        messenger_code = messenger_code[0]
        if( messenger_code.is_used == 1){
            data.messenger_code = messenger_code.code;
        }
        db.Query('select * from user where id =' + uid, function(userInfo){
            userInfo = userInfo[0];
            data.point = userInfo.point;
            res.send(data);
        })
        
    })
});

router.get('/Service/', function (req, res) {
    var uid = req.user.id
    db.Query('select * from user where id =' + uid, function(userInfo){
        userInfo = userInfo[0];
        if(userInfo.point >= 5){
            db.Query("update user Set point = point - 5 where id = " + uid, function(result){
                db.Query('update messenger_code Set is_used = 1 where user_id = ' + uid, function(messenger_code){
                    res.send("success")
                });
            });
        }
    })
});


router.post('/signup', function (req, res) {

    //var user_account = req.body['account'];
    //var user_password = req.body['password'];
    //var user_email = req.body['user_email'];
    var check_key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    var data = {
        'department': req.body['department'],//user_department,
        'grade': req.body['grade'],//user_grade,
        'email': req.body['email'],//user_email
        'check_key': check_key
    };

    var url = "nckuhub.com/user/signup_url/"

    console.log(data);
    //db.Query('user')
    db.Insert('user', data, function(err, result){
        
        if(err) console.log(err);
        else{
            gmailSend.sendMail('nckuhub@gmail.com', 'sginup go go go! '+url+data['check_key']);
        }
    })
    res.send("success");
})



router.get('/signup_url/:check_key', function (req, res) {
    
    var user_check_key = req.params.check_key;
    var datas = {
        role: 3
    };
    var conditions ={
        'check_key' : user_check_key
    }
    db.Update('user',datas,conditions,function(results){
        
        if (results.affectedRows == 0)
            res.status(404).send("Sorry, wrong url")
        else
            res.send("OK")
    })
})

router.post("/updateEmail", function(req, res){
    var id = req.body.id;
    var email = req.body['email'];
    var check_key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    var data = {
        'email': email,
        'check_key': check_key
    };
    db.Update('user', data, {"id": id}, function(results){
        res.send("success");
    })
    sendVerificationMail(id, email, check_key);
})

function sendVerificationMail(id, email, check_key){
    db.Update('user', {'role': 0}, {"id":id}, function(result){});
    let url = "https://nckuhub.com/api/user/signup_url/"+ check_key;
    gmailSend.sendMail(email, '驗證網址: '+ url);
}
module.exports = router;