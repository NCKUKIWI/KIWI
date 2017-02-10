var express = require('express');
var request = require('request');
var config = require('../config');
var router = express.Router();
var dbsystem = require('../model/dba');
var token = config.msgtoken;

router.get('/webhook/', function(req, res) {
  if (req.query['hub.verify_token'] === 'nckuhubbver49') {
    res.send(req.query['hub.challenge'])
  }
  res.send('Error, wrong token')
});


router.post('/webhook/', function(req, res) {
  messaging_events = req.body.entry[0].messaging
  for (i = 0; i < messaging_events.length; i++) {
    event = req.body.entry[0].messaging[i]
    sender = event.sender.id
    if (event.message && event.message.text) {
      text = event.message.text
      if (text === '小幫手') {
        sendGenericMessage(sender);
        continue;
      }
      else{
        var dpt = text.match(/\$[\u4e00-\u9fa5]{1,}/i);
        if(dpt) dpt=dpt[0].replace(/\$|\s/g,"");
        var keyword = text.match(/^@[\u4e00-\u9fa5]{1,}/i);
        if(keyword){
          keyword=keyword[0].replace(/@|\s/g,"");
          sendCoursePlaceByName(sender,keyword,dpt);
          continue;
        }
        var keyword2 = text.match(/^@[a-zA-Z0-9]{1,}/i);
        if(keyword2){
          keyword2=keyword2[0].replace(/@|\s/g,"");
          sendCoursePlaceById(sender,keyword2);
          continue;
        }
        var keyword3 = text.match(/^#[\u4e00-\u9fa5]{1,}/i);
        if(keyword3){
          keyword3=keyword3[0].replace(/#|\s/g,"");
          sendFollowCourseByName(sender,keyword3,dpt);
          continue;
        }
        var keyword4 = text.match(/^#[a-zA-Z0-9]{1,}/i);
        if(keyword4){
          keyword4=keyword4[0].replace(/#|\s/g,"");
          sendFollowCourseById(sender,keyword4);
          continue;
        }
      }
    }
    if (event.postback) {
      var keyword5 = event.postback.payload.match(/^![0-9]{1,}/i);
      if(keyword5){
        keyword5=keyword5[0].replace(/!|\s/g,"");
        addFollowCourse(sender,keyword5);
        continue;
      }
      else {
        sendTextMessage(sender,event.postback.payload);
        continue;
      }
    }
  }
  res.sendStatus(200);
})


function sendTextMessage(sender, text) {
  messageData = {
    text: text
  }
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {
      access_token: token
    },
    method: 'POST',
    json: {
      recipient: {
        id: sender
      },
      message: messageData,
    }
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending messages: ', error)
    } else if (response.body.error) {
      console.log('Error: ', response.body.error)
    }
  })
}

function sendGenericMessage(sender) {
  messageData = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"generic",
        "elements": [{
          "title": "NCKUHUB",
          "subtitle": "你好 👋👋 我是 NCKU HUB 新來的小幫手，請問需要什麼幫助嗎❓",
          "buttons": [{
            "type": "postback",
            "title": "找上課地點",
            "payload":"馬上為你尋找上課地點 😁😁 請告訴我們課程名稱或是選課序號（例如 @微積分 或是 @h3001）",
          },{
            "type": "postback",
            "title": "追課程餘額",
            "payload": "馬上為你追蹤課程餘額，請告訴我們課程名稱，例如 #微積分",
          }],
        }]
      }
    }
  }
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {
      access_token:token
    },
    method: 'POST',
    json: {
      recipient: {
        id:sender
      },
      message: messageData,
    }
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending messages: ', error)
    } else if (response.body.error) {
      console.log('Error: ', response.body.error)
    }
  })
}

function sendCoursePlaceByName(sender,keyword,dpt) {
  var db = new dbsystem();
  if(dpt){
    db.select().field(["系所名稱","課程名稱","時間","教室"]).from("course_105_2").where("課程名稱 LIKE '%" + keyword + "%'").where("系所名稱 LIKE '%" + dpt + "%'").run(function(course){
      db=null;
      delete db;
      if(course.length>0){
        messageData = {
          "attachment":{
            "type": "template",
            "payload": {
              "template_type":"generic",
              "elements": []
            }
          }
        }
        for(var i in course){
          if(i%3==0){
            var card = {
              "title": "NCKUHUB",
              "subtitle":"哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇",
              "buttons": [],
            }
          }
          var data = {
            "type": "postback",
            "title": course[i].系所名稱.replace(/[A-Z0-9]/g,"")+" "+course[i].課程名稱.replace(/[（|）|\s]/g,"")+" "+course[i].時間,
            "payload":(course[i].教室=="") ? "無" : "你選擇的課程為：\n"+course[i].課程名稱.replace(/[（|）|\s]/g,"")+"   "+course[i].時間+"\n上課教室在「"+course[i].教室.replace(/\s/g,"")+"」唷！",
          }
          card["buttons"].push(data);
          if(i%3==2 || i == course.length-1){
            messageData["attachment"]["payload"]["elements"].push(card);
          }
        }
        request({
          url: 'https://graph.facebook.com/v2.6/me/messages',
          qs: {
            access_token:token
          },
          method: 'POST',
          json: {
            recipient: {
              id:sender
            },
            message: messageData,
          }
        }, function(error, response, body) {
          if (error) {
            console.log('Error sending messages: ', error)
          } else if (response.body.error) {
            console.log('Error: ', response.body.error)
          }
        });
      }
      else{
        messageData = {
          text:"查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？"
        }
        request({
          url: 'https://graph.facebook.com/v2.6/me/messages',
          qs: {
            access_token: token
          },
          method: 'POST',
          json: {
            recipient: {
              id: sender
            },
            message: messageData,
          }
        }, function(error, response, body) {
          if (error) {
            console.log('Error sending messages: ', error)
          } else if (response.body.error) {
            console.log('Error: ', response.body.error)
          }
        });
      }
    });
  }
  else{
    db.select().field(["系所名稱","課程名稱","時間","教室"]).from("course_105_2").where("課程名稱 LIKE '%" + keyword + "%'").run(function(course){
      db=null;
      delete db;
      if(course.length>0){
        if(course.length>30){
          var subtitle = "以下是找到的前 30 筆結果，要精準搜尋，請輸入 @課程名稱 $系所";
        }else{
          var subtitle = "哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇";
        }
        messageData = {
          "attachment":{
            "type": "template",
            "payload": {
              "template_type":"generic",
              "elements": []
            }
          }
        }
        for(var i in course){
          if(i == 30) break;
          if(i%3==0){
            var card = {
              "title": "NCKUHUB",
              "subtitle":subtitle,
              "buttons": [],
            }
          }
          var data = {
            "type": "postback",
            "title": course[i].系所名稱.replace(/[A-Z0-9]/g,"")+" "+course[i].課程名稱.replace(/[（|）|\s]/g,"")+" "+course[i].時間,
            "payload":(course[i].教室=="") ? "無" : "你選擇的課程為：\n"+course[i].課程名稱.replace(/[（|）|\s]/g,"")+"   "+course[i].時間+"\n上課教室在「"+course[i].教室.replace(/\s/g,"")+"」唷！",
          }
          card["buttons"].push(data);
          if(i%3==2 || i == course.length-1){
            messageData["attachment"]["payload"]["elements"].push(card);
          }
        }
        request({
          url: 'https://graph.facebook.com/v2.6/me/messages',
          qs: {
            access_token:token
          },
          method: 'POST',
          json: {
            recipient: {
              id:sender
            },
            message: messageData,
          }
        }, function(error, response, body) {
          if (error) {
            console.log('Error sending messages: ', error)
          } else if (response.body.error) {
            console.log('Error: ', response.body.error)
          }
        });
      }
      else{
        messageData = {
          text:"查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？"
        }
        request({
          url: 'https://graph.facebook.com/v2.6/me/messages',
          qs: {
            access_token: token
          },
          method: 'POST',
          json: {
            recipient: {
              id: sender
            },
            message: messageData,
          }
        }, function(error, response, body) {
          if (error) {
            console.log('Error sending messages: ', error)
          } else if (response.body.error) {
            console.log('Error: ', response.body.error)
          }
        });
      }
    });
  }
}

function sendCoursePlaceById(sender,keyword) {
  keyword=keyword.toUpperCase();
  var db = new dbsystem();
  db.select().field(["系所名稱","課程名稱","時間","教室"]).from("course_105_2").where("選課序號=",keyword).run(function(course){
    db=null;
    delete db;
    if(course.length > 0){
      var text = "你選擇的課程為：\n"+course[0].系所名稱.replace(/[A-Z0-9]/g,"")+" "+course[0].課程名稱.replace(/[（|）|\s]/g,"")+"   "+course[0].時間+"\n上課教室在「"+course[0].教室.replace(/\s/g,"")+"」唷！";
    }else{
      var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
    }
    sendTextMessage(sender,text);
  });
}

function sendFollowCourseByName(sender,keyword,dpt) {
  var db = new dbsystem();
  if(dpt){
    db.select().field(["id","系所名稱","課程名稱","時間"]).from("course_105_2").where("課程名稱 LIKE '%" + keyword + "%'").where("系所名稱 LIKE '%" + dpt + "%'").run(function(course){
      db=null;
      delete db;
      if(course.length>0){
        messageData = {
          "attachment":{
            "type": "template",
            "payload": {
              "template_type":"generic",
              "elements": []
            }
          }
        }
        for(var i in course){
          if(i%3==0){
            var card = {
              "title": "NCKUHUB",
              "subtitle":"哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇",
              "buttons": [],
            }
          }
          var data = {
            "type": "postback",
            "title": course[i].系所名稱.replace(/[A-Z0-9]/g,"")+" "+course[i].課程名稱.replace(/[（|）|\s]/g,"")+" "+course[i].時間,
            "payload":"!"+course[i].id
          }
          card["buttons"].push(data);
          if(i%3==2 || i == course.length-1){
            messageData["attachment"]["payload"]["elements"].push(card);
          }
        }
        request({
          url: 'https://graph.facebook.com/v2.6/me/messages',
          qs: {
            access_token:token
          },
          method: 'POST',
          json: {
            recipient: {
              id:sender
            },
            message: messageData,
          }
        }, function(error, response, body) {
          if (error) {
            console.log('Error sending messages: ', error)
          } else if (response.body.error) {
            console.log('Error: ', response.body.error)
          }
        });
      }
      else{
        messageData = {
          text:"查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？"
        }
        request({
          url: 'https://graph.facebook.com/v2.6/me/messages',
          qs: {
            access_token: token
          },
          method: 'POST',
          json: {
            recipient: {
              id: sender
            },
            message: messageData,
          }
        }, function(error, response, body) {
          if (error) {
            console.log('Error sending messages: ', error)
          } else if (response.body.error) {
            console.log('Error: ', response.body.error)
          }
        });
      }
    });
  }
  else{
    db.select().field(["id","系所名稱","課程名稱","時間"]).from("course_105_2").where("課程名稱 LIKE '%" + keyword + "%'").run(function(course){
      db=null;
      delete db;
      if(course.length>0){
        if(course.length>30){
          var subtitle = "以下是找到的前 30 筆結果，要精準搜尋，請輸入 #課程名稱 $系所";
        }else{
          var subtitle = "哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇";
        }
        messageData = {
          "attachment":{
            "type": "template",
            "payload": {
              "template_type":"generic",
              "elements": []
            }
          }
        }
        for(var i in course){
          if(i == 30) break;
          if(i%3==0){
            var card = {
              "title": "NCKUHUB",
              "subtitle":subtitle,
              "buttons": [],
            }
          }
          var data = {
            "type": "postback",
            "title": course[i].系所名稱.replace(/[A-Z0-9]/g,"")+" "+course[i].課程名稱.replace(/[（|）|\s]/g,"")+" "+course[i].時間,
            "payload":"!"+course[i].id
          }
          card["buttons"].push(data);
          if(i%3==2 || i == course.length-1){
            messageData["attachment"]["payload"]["elements"].push(card);
          }
        }
        request({
          url: 'https://graph.facebook.com/v2.6/me/messages',
          qs: {
            access_token:token
          },
          method: 'POST',
          json: {
            recipient: {
              id:sender
            },
            message: messageData,
          }
        }, function(error, response, body) {
          if (error) {
            console.log('Error sending messages: ', error)
          } else if (response.body.error) {
            console.log('Error: ', response.body.error)
          }
        });
      }
      else{
        messageData = {
          text:"查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？"
        }
        request({
          url: 'https://graph.facebook.com/v2.6/me/messages',
          qs: {
            access_token: token
          },
          method: 'POST',
          json: {
            recipient: {
              id: sender
            },
            message: messageData,
          }
        }, function(error, response, body) {
          if (error) {
            console.log('Error sending messages: ', error)
          } else if (response.body.error) {
            console.log('Error: ', response.body.error)
          }
        });
      }
    });
  }
}

function sendFollowCourseById(sender,keyword) {
  keyword=keyword.toUpperCase();
  var db = new dbsystem();
  db.select().field(["id","系所名稱","課程名稱","時間"]).from("course_105_2").where("選課序號=",keyword).run(function(course){
    if(course.length > 0){
      db.select().field("*").from("follow").where("course_id=",course[0].id).where("fb_id=",sender).run(function(follow){
        if(follow.length < 0){
          var text = "你選擇的課程為：\n"+course[0].系所名稱.replace(/[A-Z0-9]/g,"")+" "+course[0].課程名稱.replace(/[（|）|\s]/g,"")+"   "+course[0].時間+"\n已為你追蹤餘額!";
          sendTextMessage(text);
          var data = {
            course_id:course[0].id,
            fb_id:sender
          }
          db.insert().into("follow").set(dat).run(function(result){
            db=null;
            delete db;
          });
        }
        else{
          var text = "你選擇的課程為：\n"+course[0].系所名稱.replace(/[A-Z0-9]/g,"")+" "+course[0].課程名稱.replace(/[（|）|\s]/g,"")+"   "+course[0].時間+"\n已經追蹤過囉!";
          sendTextMessage(sender,text);
        }
      });
    }else{
      var text="查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
      sendTextMessage(sender,text);
    }
  });
}

function addFollowCourse(sender,course_id){
  var db = new dbsystem();
  db.select().field(["系所名稱","課程名稱","時間"]).from("course_105_2").where("id=",course_id).run(function(course){
    db.select().field("*").from("follow").where("course_id=",course_id).where("fb_id=",sender).run(function(follow){
      if(follow.length < 0){
        var text = "你選擇的課程為：\n"+course[0].系所名稱.replace(/[A-Z0-9]/g,"")+" "+course[0].課程名稱.replace(/[（|）|\s]/g,"")+"   "+course[0].時間+"\n已為你追蹤餘額!";
        sendTextMessage(text);
        var data = {
          course_id:course_id,
          fb_id:sender
        }
        db.insert().into("follow").set(data).run(function(result){});
      }
      else{
        var text = "你選擇的課程為：\n"+course[0].系所名稱.replace(/[A-Z0-9]/g,"")+" "+course[0].課程名稱.replace(/[（|）|\s]/g,"")+"   "+course[0].時間+"\n已經追蹤過囉!";
        sendTextMessage(sender,text);
      }
    });
  });
}

module.exports = router;
