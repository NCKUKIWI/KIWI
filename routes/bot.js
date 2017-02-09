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
        var keyword = text.match(/^@[\u4e00-\u9fa5]{1,}/i);
        if(keyword){
          keyword=keyword[0].replace(/@|\s/g,"");
          sendCoursePlace(sender,keyword);
          continue;
        }
        continue;
      }
    }
    if (event.postback) {
      sendTextMessage(sender,event.postback.payload);
      continue;
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
          "subtitle": "你好，我是 NCKU HUB 新來的小幫手。請問需要什麼幫助嗎？?",
          "buttons": [{
            "type": "postback",
            "title": "找上課地點",
            "payload":"馬上為你尋找上課地點，請告訴我們課程名稱，例如 @微積分",
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

function sendCoursePlace(sender,keyword) {
  var db = new dbsystem();
  db.select().field(["系所名稱","課程名稱","時間","教室"]).from("course_105_2").where("課程名稱 LIKE '%" + keyword + "%'").run(function(course){
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
          "subtitle": "你好，我是 NCKU HUB 新來的小幫手。請問需要什麼幫助嗎？?",
          "buttons": [],
        }
      }
      var data = {
        "type": "postback",
        "title": course[i].系所名稱+" "+course[i].課程名稱+" "+course[i].時間,
        "payload":course[i].教室,
      }
      card["buttons"].push(data);
      if(i%3==2 || i == course.length-1){
        messageData["attachment"]["payload"]["elements"].push(card);
      }
    }
    console.log(messageData["attachment"]["payload"]["elements"].length);
    db=null;
    delete db;
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
  });
}


module.exports = router;
