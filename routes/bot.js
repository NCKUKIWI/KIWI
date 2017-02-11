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
        sendHelloMessage(sender);
        continue;
      }
      else{
        var teacher = text.match(/[\%|\uff05][\u4e00-\u9fa5]{1,}/i);
        var dpt = text.match(/[\$|\uff04][\u4e00-\u9fa5]{1,}/i);
        if(dpt) dpt=dpt[0].replace(/[\$|\uff04|\s]/g,"");
        if(teacher) teacher=teacher[0].replace(/[\%|\uff05|\s]/g,"");
        var keyword = text.match(/^[\uff20|@][\u4e00-\u9fa5]{1,}/i);
        if(keyword){
          keyword=keyword[0].replace(/[\uff20|@|\s]/g,"");
          sendCoursePlaceByName(sender,keyword,dpt,teacher);
          continue;
        }
        var keyword2 = text.match(/^[\uff20|@][a-zA-Z0-9]{1,}/i);
        if(keyword2){
          keyword2=keyword2[0].replace(/[\uff20|@|\s]/g,"");
          sendCoursePlaceById(sender,keyword2);
          continue;
        }
        var keyword3 = text.match(/^[#|\uff03][\u4e00-\u9fa5]{1,}/i);
        if(keyword3){
          keyword3=keyword3[0].replace(/[#|\uff03|\s]/g,"");
          sendFollowCourseByName(sender,keyword3,dpt,teacher);
          continue;
        }
        var keyword4 = text.match(/^[#|\uff03][a-zA-Z0-9]{1,}/i);
        if(keyword4){
          keyword4=keyword4[0].replace(/[#|\uff03|\s]/g,"");
          sendFollowCourseById(sender,keyword4);
          continue;
        }
      }
    }
    if (event.postback) {
      var keyword5 = event.postback.payload.match(/^![0-9]{1,}/i);
      var keyword6 = event.postback.payload.match(/^&[0-9]{1,}/i);
      var keyword7 = event.postback.payload.match(/^@[0-9]{1,}/i);
      if(keyword5){
        keyword5=keyword5[0].replace(/!|\s/g,"");
        addFollowCourse(sender,keyword5);
      }
      else if(keyword6){
        keyword6=keyword6[0].replace(/&|\s/g,"");
        cancelFollowCourse(sender,keyword6);
      }
      else if(keyword7){
        keyword7=keyword7[0].replace(/@|\s/g,"");
        sendCourseInfo(sender,keyword7);
      }
      else {
        if(event.postback.payload=="cancelfollow"){
          sendFollowCourseList(sender);
        }
        else if(event.postback.payload=="callagain"){
          sendHelloMessage(sender);
        }
        else if(event.postback.payload=="cancelall"){
          cancelAllFollowCourse(sender);
        }
        else{
          sendTextMessage(sender,event.postback.payload);
        }
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

function sendHelloMessage(sender) {
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
            "title": "尋找上課地點",
            "payload":"馬上為你尋找上課地點 😁😁\n\n請告訴我們課程名稱或是選課序號，例如「 @微積分 」或是「 @h3001 」\n\n你也可以加上「 $系所 」「 %老師名 」以使用進階搜尋，例如「 @微積分 $工資 %侯世章 」",
          },{
            "type": "postback",
            "title": "追蹤課程餘額",
            "payload":"馬上為你追蹤課程餘額 😀😀\n\n請告訴我們課程名稱或是選課序號，例如「 #微積分 」或是「 #h3001 」\n\n你也可以加上「 $系所 」「 %老師名 」以使用進階搜尋，例如「 #微積分 $工資 %侯世章 」",
          },{
            "type": "postback",
            "title": "取消追蹤餘額",
            "payload": "cancelfollow",
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

function sendCoursePlaceByName(sender,keyword,dpt,teacher) {
  var db = new dbsystem();
  db.select().field(["id","系所名稱","課程名稱","時間","教室"]).from("course_105_2").where("課程名稱 LIKE '%" + keyword + "%'").whereCheck("系所名稱 LIKE '%" + dpt + "%'",dpt).whereCheck("老師 LIKE '%" + teacher + "%'",teacher).run(function(course){
    db=null;
    delete db;
    if(course.length>0){
      if(course.length>30){
        var subtitle = "以下是找到的前 30 筆結果。若要精準搜尋，請輸入 @課程名稱 $系所 %老師名";
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
        if(i==30) break;
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
          "payload":"@"+course[i].id,
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
      var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
      sendTextMessage(sender,text);
      sendGoodbye(sender);
    }
  });
}

function sendCoursePlaceById(sender,keyword) {
  keyword=keyword.toUpperCase();
  var db = new dbsystem();
  db.select().field(["id"]).from("course_105_2").where("選課序號=",keyword).run(function(course){
    db=null;
    delete db;
    if(course.length > 0){
      sendCourseInfo(sender,course[0].id);
    }else{
      var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
      sendTextMessage(sender,text);
      sendGoodbye(sender);
    }
  });
}

function sendCourseInfo(sender,course_id) {
  var db = new dbsystem();
  db.select().field(["系所名稱","課程名稱","時間","教室","老師"]).from("course_105_2").where("id=",course_id).run(function(course){
    db=null;
    delete db;
    var text = "你選擇的課程為：\n"+course[0].系所名稱.replace(/[A-Z0-9]/g,"")+"／"+course[0].課程名稱.replace(/[（|）|\s]/g,"")+"／"+course[0].老師.replace(/\s/g,"")+"／"+course[0].時間+"。上課教室在「"+course[0].教室.replace(/\s/g,"")+"」唷！";
    sendTextMessage(sender,text);
    sendGoodbye(sender);
  });
}

function sendFollowCourseByName(sender,keyword,dpt,teacher) {
  var db = new dbsystem();
  db.select().field(["id","系所名稱","課程名稱","時間"]).from("course_105_2").where("課程名稱 LIKE '%" + keyword + "%'").whereCheck("系所名稱 LIKE '%" + dpt + "%'",dpt).whereCheck("老師 LIKE '%" + teacher + "%'",teacher).run(function(course){
    db=null;
    delete db;
    if(course.length>0){
      if(course.length>30){
        var subtitle = "以下是找到的前 30 筆結果。若要精準搜尋，請輸入 #課程名稱 $系所 %老師名";
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
        if(i==30) break;
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
      var text="查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
      sendTextMessage(sender,text);
      sendGoodbye(sender);
    }
  });
}

function sendFollowCourseById(sender,keyword) {
  keyword=keyword.toUpperCase();
  var db = new dbsystem();
  db.select().field(["id"]).from("course_105_2").where("選課序號=",keyword).run(function(course){
    if(course.length > 0){
      addFollowCourse(sender,course[0].id);
    }else{
      var text="查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
      sendTextMessage(sender,text);
      sendGoodbye(sender);
    }
  });
}

function addFollowCourse(sender,course_id){
  var db = new dbsystem();
  db.select().field(["系所名稱","課程名稱","時間","餘額","選課序號","老師"]).from("course_105_2").where("id=",course_id).run(function(course){
    if(course[0].餘額 =="額滿"){
      db.select().field("*").from("follow").where("course_id=",course_id).where("fb_id=",sender).run(function(follow){
        if(follow.length < 1){
          var text = "你選擇的課程為：\n"+course[0].系所名稱.replace(/[A-Z0-9]/g,"")+"／"+course[0].課程名稱.replace(/[（|）|\s]/g,"")+"／"+course[0].老師.replace(/\s/g,"")+"／"+course[0].時間+"。這堂課目前無餘額，已為你設定追蹤 👌 有餘額的時候會私訊你，請抱著既期待又怕受傷害的心情等候 🙌🙌";
          sendTextMessage(sender,text);
          sendGoodbye(sender);
          var data = {
            course_id:course_id,
            fb_id:sender,
            content:course[0].系所名稱.replace(/[A-Z0-9]/g,"")+"／"+course[0].課程名稱.replace(/[（|）|\s]/g,""),
            time:course[0].時間,
            serial:(course[0].選課序號)?course[0].選課序號:"",
            teacher:course[0].老師
          }
          db.insert().into("follow").set(data).run(function(result){});
        }
        else{
          var text = "你選擇的課程為：\n"+course[0].系所名稱.replace(/[A-Z0-9]/g,"")+"／"+course[0].課程名稱.replace(/[（|）|\s]/g,"")+"／"+course[0].老師.replace(/\s/g,"")+"／"+course[0].時間+"。這堂課目前無餘額，已為你設定過追蹤囉！";
          sendTextMessage(sender,text);
          sendGoodbye(sender);
        }
      });
    }else{
      var text = "你選擇的課程為：\n"+course[0].系所名稱.replace(/[A-Z0-9]/g,"")+"／"+course[0].課程名稱.replace(/[（|）|\s]/g,"")+"／"+course[0].老師.replace(/\s/g,"")+"／"+course[0].時間+"。這門課還有 "+course[0].餘額+" 個餘額！趕快去選吧 🏄🏄";
      sendTextMessage(sender,text);
      sendGoodbye(sender);
    }
  });
}

function sendFollowCourseList(sender){
  var db = new dbsystem();
  db.select().field(["*"]).from("follow").where("fb_id=",sender).run(function(follow){
    db=null;
    delete db;
    if(follow.length>0){
      messageData = {
        "attachment":{
          "type": "template",
          "payload": {
            "template_type":"generic",
            "elements": []
          }
        }
      }
      for(var i in follow){
        if(i == 30) break;
        if(i%3==0){
          var card = {
            "title": "NCKUHUB",
            "subtitle":"以下是你目前追蹤的課程，請問要取消哪一個呢？",
            "buttons": [],
          }
        }
        var data = {
          "type": "postback",
          "title":follow[i].content.replace(/\uff0f/g," ")+" "+follow[i].serial,
          "payload":"&"+follow[i].id,
        }
        card["buttons"].push(data);
        if(i%3==2 || i == follow.length-1){
          messageData["attachment"]["payload"]["elements"].push(card);
        }
      }
      if(follow.length %3 == 0){
        var card = {
          "title": "NCKUHUB",
          "subtitle":"以下是你目前追蹤的課程，請問要取消哪一個呢？",
          "buttons": [{
            "type": "postback",
            "title":"全部取消",
            "payload":"cancelall",
          }],
        }
        messageData["attachment"]["payload"]["elements"].push(card);
      }
      else{
        var data = {
          "type": "postback",
          "title":"全部取消",
          "payload":"cancelall",
        }
        messageData["attachment"]["payload"]["elements"][messageData["attachment"]["payload"]["elements"].length-1]["buttons"].push(data);
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
      var text = "目前沒有追蹤中的課程喔!";
      sendTextMessage(sender,text);
      sendGoodbye(sender);
    }
  });
}

function cancelFollowCourse(sender,follow_id){
  var db = new dbsystem();
  db.select().field(["content","teacher","time"]).from("follow").where("id=",follow_id).run(function(follow){
    if(follow.length > 0){
      var text = "你選擇的課程為："+follow[0].content+"／"+follow[0].teacher+"／"+follow[0].time+"。已經為你取消追蹤囉 🙂🙂";
      sendTextMessage(sender,text);
      sendGoodbye(sender);
      db.delete().from("follow").where("id=",follow_id).run(function(result){});
    }
    else{
      var text = "已經為你取消追蹤囉 🙂🙂";
      sendTextMessage(sender,text);
      sendGoodbye(sender);
    }
  });
}

function cancelAllFollowCourse(sender){
  var text = "沒問題，已經為你取消追蹤囉！";
  sendTextMessage(sender,text);
  sendGoodbye(sender);
  var db = new dbsystem();
  db.delete().from("follow").where("fb_id=",sender).run(function(result){});
}

function sendGoodbye(sender){
  messageData = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"generic",
        "elements": [{
          "title": "NCKUHUB",
          "subtitle": "感謝使用 🙏 希望有幫上你的忙！",
          "buttons": [{
            "type": "postback",
            "title": "再次呼喚小幫手",
            "payload":"callagain",
          },{
            "type": "postback",
            "title": "用完了，謝謝！",
            "payload": "不客氣，也謝謝你的使用 ☺",
          }],
        }]
      }
    }
  }
  setTimeout(function(){
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
  },3000);
}
module.exports = router;
