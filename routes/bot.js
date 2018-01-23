var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config');
var token = config.fb.msgtoken;
var disable = config.bot.disable;
var Op = require('sequelize').Op;
var db = require('../model/db');
var Course = require('../model/Course');
var Follow = require('../model/Follow');
var FollowCopy = require('../model/FollowCopy');

//取得所有課程資料
var courseNameList = [];
var courseSerialList = [];
//定時通知餘額
var checkCourse;
var checkCourseStatus = 0;

Course.findAll({
  attributes: ['course_name', 'serial'],
  where: {
    serial: {
      [Op.ne]: ''
    }
  }
}).then(function (courses) {
  for (var i in courses) {
    courseNameList.push(courses[i].course_name);
    courseSerialList.push(courses[i].serial);
  }
  return db.query('SELECT * FROM `setting` WHERE `id` = 1', {
    type: db.QueryTypes.SELECT
  });
}).then(function (setting) {
  checkCourseStatus = setting[0].status;
  if (checkCourseStatus == 1) {
    checkCourse = setInterval(function () {
      checkCourseRemain();
    }, 1000 * 10);
  }
});

router.get('/setting/', function (req, res) {
  res.render('setting', {
    botswitch: checkCourseStatus
  });
});

router.post('/sendmsg', function (req, res) {
  if (req.body.pw != "nckuhubsetting") {
    res.send("fail");
  } else {
    if (req.body.type == "test") {
      if (req.body.msg) {
        if (req.body.msg == 'cancelMsg') {
          sendCancelMsg("1346773338719764");
          sendCancelMsg("1169375359801678");
          sendCancelMsg("1364925580245632");
          sendCancelMsg("1194641423974664");
          sendCancelMsg("1318673478198233");
        } else {
          sendTextMessage("1346773338719764", req.body.msg);
          sendTextMessage("1169375359801678", req.body.msg);
          sendTextMessage("1364925580245632", req.body.msg);
          sendTextMessage("1194641423974664", req.body.msg);
          sendTextMessage("1318673478198233", req.body.msg);
        }
      }
    } else if (req.body.type == "broadcast") {
      FollowCopy.findAll({
        attributes: [
          [sequelize.fn('DISTINCT', sequelize.col('fb_id'))]
        ],
        where: {
          getMsg: {
            [Op.ne]: 0
          }
        }
      }).then(function (users) {
        users.forEach(function (user) {
          if (req.body.msg) {
            if (req.body.msg == 'cancelMsg') {
              sendCancelMsg(user.fb_id);
            } else {
              sendTextMessage(user.fb_id, req.body.msg);
            }
          }
        });
      });
    }
    res.send('ok');
  }
});

router.post('/sendlink', function (req, res) {
  if (req.body.pw != "nckuhubsetting") {
    res.send("fail");
  } else {
    if (req.body.type == "test") {
      if (req.body.linktitle && req.body.linkurl) {
        sendLink("1346773338719764", {
          url: req.body.linkurl,
          title: req.body.linktitle,
          description: req.body.linkdescription
        });
        sendLink("1169375359801678", {
          url: req.body.linkurl,
          title: req.body.linktitle,
          description: req.body.linkdescription
        });
        sendLink("1364925580245632", {
          url: req.body.linkurl,
          title: req.body.linktitle,
          description: req.body.linkdescription
        });
        sendLink("1194641423974664", {
          url: req.body.linkurl,
          title: req.body.linktitle,
          description: req.body.linkdescription
        });
        sendLink("1318673478198233", {
          url: req.body.linkurl,
          title: req.body.linktitle,
          description: req.body.linkdescription
        });
      }
    } else if (req.body.type == "broadcast") {
      FollowCopy.findAll({
        attributes: [
          [sequelize.fn('DISTINCT', sequelize.col('fb_id'))]
        ],
        where: {
          getMsg: {
            [Op.ne]: 0
          }
        }
      }).then(function (users) {
        users.forEach(function (user) {
          if (req.body.linktitle && req.body.linkurl) {
            sendLink(user.fb_id, {
              url: req.body.linkurl,
              title: req.body.linktitle,
              description: req.body.linkdescription
            })
          }
        });
      })
    }
    res.send('ok');
  }
});

router.post('/openbot', function (req, res) {
  checkCourse = setInterval(function () {
    checkCourseRemain();
  }, 1000 * 10);
  db.query('UPDATE `setting` SET `status` = 1 WHERE `id` = 1', {
    type: db.QueryTypes.UPDATE
  }).then(function () {
    checkCourseStatus = 1;
    res.send('ok');
  });
});

router.post('/closebot', function (req, res) {
  clearInterval(checkCourse);
  db.query('UPDATE `setting` SET `status` = 0 WHERE `id` = 1', {
    type: db.QueryTypes.UPDATE
  }).then(function () {
    checkCourseStatus = 0;
    res.send('ok');
  });
});

router.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === 'nckuhubbver49') {
    res.send(req.query['hub.challenge'])
  }
  res.send('Error, wrong token')
});

router.post('/webhook/', function (req, res) {
  var messaging_events = req.body.entry[0].messaging
  for (i = 0; i < messaging_events.length; i++) {
    var event = req.body.entry[0].messaging[i]
    var sender = event.sender.id //使用者messenger id
    if (event.message && event.message.text) {
      var text = event.message.text //用戶傳送的訊息
      console.log("text:" + text);
      if (text.indexOf("小幫手") != -1) {
        sendHelloMessage(sender);
      } else {
        var serial = text.replace(/[\s|\-]/g, "").match(/^[a-zA-Z][0-9]{4}/i);
        if (serial) {
          if (courseSerialList.indexOf(serial[0].toUpperCase()) !== -1) {
            askPlaceOrFollow(sender, serial[0]);
          }
        } else {
          if (courseNameList.indexOf(text) != -1) {
            searchCourseByName(sender, text);
          } else {
            var teacher = text.match(/[\%|\uff05][\u4e00-\u9fa5]{1,}/i); //檢查 %老師名稱
            var dpt = text.match(/[\$|\uff04][\u4e00-\u9fa5]{1,}/i); //檢查 $系所名稱
            if (dpt) dpt = dpt[0].replace(/[\$|\uff04|\s]/g, ""); //過濾掉不該有的內容
            if (teacher) teacher = teacher[0].replace(/[\%|\uff05|\s]/g, "");
            if (text.indexOf('%') == 0) {
              searchCourseByTeacher(sender, teacher);
            } else {
              var courseNamePlace = text.match(/^[\uff20|@][\u4e00-\u9fa5]{1,}/i); //檢查 @課程名稱
              if (courseNamePlace) {
                courseNamePlace = courseNamePlace[0].replace(/[\uff20|@|\s]/g, "");
                sendCoursePlaceByName(sender, courseNamePlace, dpt, teacher); //透過課程名稱搜尋並傳送課程地點
              }
              var courseSerialPlace = text.match(/^[\uff20|@][a-zA-Z0-9]{5}/i); //檢查 @選課序號
              if (courseSerialPlace) {
                courseSerialPlace = courseSerialPlace[0].replace(/[\uff20|@|\s]/g, "");
                sendCoursePlaceById(sender, courseSerialPlace); //透過課程序號搜尋並傳送課程地點
              }
              var courseNameFollow = text.match(/^[#|\uff03][\u4e00-\u9fa5]{1,}/i); //檢查 #課程名稱
              if (courseNameFollow) {
                courseNameFollow = courseNameFollow[0].replace(/[#|\uff03|\s]/g, "");
                sendFollowCourseByName(sender, courseNameFollow, dpt, teacher); //透過課程名稱搜尋並傳送追蹤課程按鈕
              }
              var courseSerialFollow = text.match(/^[#|\uff03][a-zA-Z0-9]{5}/i); //檢查 #選課序號
              if (courseSerialFollow) {
                courseSerialFollow = courseSerialFollow[0].replace(/[#|\uff03|\s]/g, "");
                sendFollowCourseById(sender, courseSerialFollow); //透過選課序號搜尋並傳送追蹤課程按鈕
              }
            }
          }
        }
      }
    }
    //檢查使用者是否按下訊息中的按鈕
    if (event.postback) {
      var courseIdFollow = event.postback.payload.match(/^![0-9]{1,}/i); //抓payload中的 course_id 用來追蹤課程
      var courseIdCancel = event.postback.payload.match(/^&[0-9]{1,}/i); //抓payload中的 course_id 用來取消追蹤課程
      var courseIdInfo = event.postback.payload.match(/^@[0-9]{1,}/i); //抓payload中的 course_id 用來傳送單一課程詳細資訊
      if (courseIdFollow) {
        courseIdFollow = courseIdFollow[0].replace(/!|\s/g, "");
        addFollowCourse(sender, courseIdFollow);
      } else if (courseIdCancel) {
        courseIdCancel = courseIdCancel[0].replace(/&|\s/g, "");
        cancelFollowCourse(sender, courseIdCancel);
      } else if (courseIdInfo) {
        courseIdInfo = courseIdInfo[0].replace(/@|\s/g, "");
        sendCourseInfo(sender, courseIdInfo);
      } else {
        if (event.postback.payload == "cancelfollow") {
          sendFollowCourseList(sender);
        } else if (event.postback.payload == "callagain") {
          sendHelloMessage(sender);
        } else if (event.postback.payload == "cancelall") {
          cancelAllFollowCourse(sender);
        } else if (event.postback.payload == "cancelmsg") {
          cancelMsg(sender);
        } else if (event.postback.payload.indexOf("ask") !== -1) {
          askPlaceOrFollow(sender, event.postback.payload.replace("ask", ""));
        } else {
          sendTextMessage(sender, event.postback.payload);
        }
      }
    }
  }
  res.sendStatus(200);
});

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
  }, function (error, response, body) {
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
        "template_type": "generic",
        "elements": [{
          "title": "NCKUHUB",
          "subtitle": "你好 👋👋 我是 NCKU HUB 新來的小幫手，請問需要什麼幫助嗎❓",
          "buttons": [{
            "type": "postback",
            "title": "尋找上課地點",
            "payload": "馬上為你尋找上課地點 😁😁\n\n請告訴我們課程名稱或是選課序號，例如「@微積分」或是「@h3001」\n\n你也可以加上「$系所 %老師名」，來精準搜尋課程，例如「@微積分 $工資 %侯世章」",
          }, {
            "type": "postback",
            "title": "追蹤課程餘額",
            "payload": "馬上為你追蹤課程餘額 😀😀\n\n請告訴我們課程名稱或是選課序號，例如「#微積分」或是「#h3001」\n\n你也可以加上「$系所 %老師名」，來精準搜尋課程，例如「#微積分 $工資 %侯世章」",
          }, {
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
      access_token: token
    },
    method: 'POST',
    json: {
      recipient: {
        id: sender
      },
      message: messageData,
    }
  }, function (error, response, body) {
    if (error) {
      console.log('Error sending messages: ', error)
    } else if (response.body.error) {
      console.log('Error: ', response.body.error)
    }
  })
}

function sendCoursePlaceByName(sender, name, dpt, teacher) {
  var Query = {}
  if (name) Query.course_name = {
    [Op.like]: `%${name}%`
  }
  if (dpt) Query.dep_name = {
    [Op.like]: `%${dpt}%`
  }
  if (teacher) Query.teacher = {
    [Op.like]: `%${teacher}%`
  }
  Course.findAll({
    attributes: ['id', 'dep_name', 'time', 'course_name', 'classroom', 'teacher'],
    where: Query
  }).then(function (courses) {
    if (courses.length > 0) {
      if (courses.length > 30) {
        var subtitle = "以下是找到的前 30 筆結果。若要精準搜尋，請輸入 @課程名稱 $系所 %老師名";
      } else {
        var subtitle = "哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇";
      }
      messageData = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "generic",
            "elements": []
          }
        }
      }
      for (var i in courses) {
        if (i == 30) break;
        if (i % 3 == 0) {
          var card = {
            "title": "NCKUHUB",
            "subtitle": subtitle,
            "buttons": [],
          }
        }
        var data = {
          "type": "postback",
          "title": courses[i].dep_name.replace(/[A-Z0-9]/g, "") + " " + courses[i].course_name.replace(/[（|）|\s]/g, "") + " " + courses[i].time,
          "payload": "@" + courses[i].id,
        }
        card["buttons"].push(data);
        if (i % 3 == 2 || i == courses.length - 1) {
          messageData["attachment"]["payload"]["elements"].push(card);
        }
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
      }, function (error, response, body) {
        if (error) {
          console.log('Error sending messages: ', error)
        } else if (response.body.error) {
          console.log('Error: ', response.body.error)
        }
      });
    } else {
      var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
      sendTextMessage(sender, text);
      sendGoodbye(sender);
    }
  });
}

function sendCoursePlaceById(sender, serial) {
  serial = serial.toUpperCase();
  Course.findOne({
    attributes: ['id'],
    where: {
      serial: serial
    }
  }).then(function (course) {
    if (course) {
      sendCourseInfo(sender, course.id);
    } else {
      var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
      sendTextMessage(sender, text);
      sendGoodbye(sender);
    }
  });
}

function sendCourseInfo(sender, course_id) {
  Course.findOne({
    attributes: ['dep_no', 'dep_name', 'course_name', 'time', 'classroom', 'teacher'],
    where: {
      id: course_id
    }
  }).then(function (course) {
    course.classroom = course.classroom.replace(/\s/g, "");
    if (course.classroom == '') {
      var text = "你選擇的課程是：\n\n" + course[0].dep_name.replace(/[A-Z0-9]/g, "") + "／" + course[0].course_name.replace(/[（|）|\s]/g, "") + "／" + course[0].teacher.replace(/\s/g, "") + "／" + course[0].time + "\n\n上課地點請查看 http://course-query.acad.ncku.edu.tw/qry/qry001.php?dept_no=" + course[0].dep_no;
    } else {
      var text = "你選擇的課程是：\n\n" + course[0].dep_name.replace(/[A-Z0-9]/g, "") + "／" + course[0].course_name.replace(/[（|）|\s]/g, "") + "／" + course[0].teacher.replace(/\s/g, "") + "／" + course[0].time + "\n\n上課地點在「" + course[0].classroom.replace(/\s/g, "") + "」唷！";
    }
    sendTextMessage(sender, text);
    sendGoodbye(sender);
  });
}

function sendFollowCourseByName(sender, name, dpt, teacher) {
  var Query = {}
  if (name) Query.course_name = {
    [Op.like]: `%${name}%`
  }
  if (dpt) Query.dep_name = {
    [Op.like]: `%${dpt}%`
  }
  if (teacher) Query.teacher = {
    [Op.like]: `%${teacher}%`
  }
  Course.findAll({
    attributes: ['id', 'dep_name', 'time', 'course_name', 'classroom', 'teacher'],
    where: Query
  }).then(function (courses) {
    if (courses.length > 0) {
      if (courses.length > 30) {
        var subtitle = "以下是找到的前 30 筆結果。若要精準搜尋，請輸入 #課程名稱 $系所 %老師名";
      } else {
        var subtitle = "哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇";
      }
      messageData = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "generic",
            "elements": []
          }
        }
      }
      for (var i in courses) {
        if (i == 30) break;
        if (i % 3 == 0) {
          var card = {
            "title": "NCKUHUB",
            "subtitle": subtitle,
            "buttons": [],
          }
        }
        var data = {
          "type": "postback",
          "title": courses[i].dep_name.replace(/[A-Z0-9]/g, "") + " " + courses[i].course_name.replace(/[（|）|\s]/g, "") + " " + courses[i].time,
          "payload": "!" + courses[i].id
        }
        card["buttons"].push(data);
        if (i % 3 == 2 || i == courses.length - 1) {
          messageData["attachment"]["payload"]["elements"].push(card);
        }
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
      }, function (error, response, body) {
        if (error) {
          console.log('Error sending messages: ', error)
        } else if (response.body.error) {
          console.log('Error: ', response.body.error)
        }
      });
    } else {
      var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
      sendTextMessage(sender, text);
      sendGoodbye(sender);
    }
  });
}

function sendFollowCourseById(sender, serial) {
  serial = serial.toUpperCase();
  Course.findOne({
    attributes: ['id'],
    where: {
      serial: serial
    }
  }).then(function (course) {
    if (course) {
      addFollowCourse(sender, course.id);
    } else {
      var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
      sendTextMessage(sender, text);
      sendGoodbye(sender);
    }
  });
}

function addFollowCourse(sender, course_id) {
  Course.findAll({
    attributes: ['dep_name', 'course_name', 'time', 'remaining', 'serial', 'teacher'],
    where: {
      id: course_id
    }
  }).then(function (course) {
    if (disable.indexOf(course.dep_no) == -1) {
      if (course.remaining == "額滿") {
        Follow.findOne({
          where: {
            course_id: course_id,
            fb_id: sender
          }
        }).then(function (follow) {
          if (follow) {
            var text = "你選擇的課程是：\n\n" + course.dep_name.replace(/[A-Z0-9]/g, "") + "／" + course.course_name.replace(/[（|）|\s]/g, "") + "／" + course.teacher.replace(/\s/g, "") + "／" + course.time + "\n\n這堂課目前無餘額，已為你設定追蹤 👌 有餘額的時候會私訊你唷！請抱著既期待又怕受傷害的心情等候 🙌🙌";
            sendTextMessage(sender, text);
            sendGoodbye(sender);
            var data = {
              course_id: course_id,
              fb_id: sender,
              content: course.dep_name.replace(/[A-Z0-9]/g, "") + "／" + course.course_name.replace(/[（|）|\s]/g, ""),
              time: course.time,
              serial: (course.serial) ? course.serial : "",
              teacher: course.teacher
            }
            Follow.create(data).then(function (result) {
              return FollowCopy.create(data);
            }).then(function (result) {}).catch(function (err) {
              console.log(err);
            });
          } else {
            var text = "你選擇的課程是：\n\n" + course.dep_name.replace(/[A-Z0-9]/g, "") + "／" + course.course_name.replace(/[（|）|\s]/g, "") + "／" + course.teacher.replace(/\s/g, "") + "／" + course.time + "\n\n這堂課目前無餘額，已經為你設定過追蹤囉！";
            sendTextMessage(sender, text);
            sendGoodbye(sender);
          }
        });
      } else {
        var text = "你選擇的課程是：\n\n" + course.serial + "／" + course.dep_name.replace(/[A-Z0-9]/g, "") + "／" + course.course_name.replace(/[（|）|\s]/g, "") + "／" + course.teacher.replace(/\s/g, "") + "／" + course.time + "\n\n這門課還有 " + course.remaining + " 個餘額！趕快去選吧 🏄🏄\n\n成大選課連結：https://goo.gl/o8zPZH";
        sendTextMessage(sender, text);
        sendGoodbye(sender);
      }
    } else {
      sendDisableMsg(sender, course.dep_no);
    }
  });
}

function sendFollowCourseList(sender) {
  Follow.findAll({
    where: {
      fb_id: sender
    }
  }).then(function (follow) {
    if (follow.length > 0) {
      messageData = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "generic",
            "elements": []
          }
        }
      }
      for (var i in follow) {
        if (i == 30) break;
        if (i % 3 == 0) {
          var card = {
            "title": "NCKUHUB",
            "subtitle": "以下是你目前追蹤的課程，請問要取消追蹤哪一個呢？",
            "buttons": [],
          }
        }
        var data = {
          "type": "postback",
          "title": follow[i].content.replace(/\uff0f/g, " ") + " " + follow[i].serial,
          "payload": "&" + follow[i].id,
        }
        card["buttons"].push(data);
        if (i % 3 == 2 || i == follow.length - 1) {
          messageData["attachment"]["payload"]["elements"].push(card);
        }
      }
      if (follow.length % 3 == 0) {
        var card = {
          "title": "NCKUHUB",
          "subtitle": "以下是你目前追蹤的課程，請問要取消追蹤哪一個呢？",
          "buttons": [{
            "type": "postback",
            "title": "全部取消追蹤",
            "payload": "cancelall",
          }],
        }
        messageData["attachment"]["payload"]["elements"].push(card);
      } else {
        var data = {
          "type": "postback",
          "title": "全部取消追蹤",
          "payload": "cancelall",
        }
        messageData["attachment"]["payload"]["elements"][messageData["attachment"]["payload"]["elements"].length - 1]["buttons"].push(data);
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
      }, function (error, response, body) {
        if (error) {
          console.log('Error sending messages: ', error)
        } else if (response.body.error) {
          console.log('Error: ', response.body.error)
        }
      });
    } else {
      var text = "目前沒有追蹤中的課程喔！";
      sendTextMessage(sender, text);
      sendGoodbye(sender);
    }
  });
}

function cancelFollowCourse(sender, follow_id) {
  Follow.findOne({
    attributes: ['content', 'teacher', 'time'],
    where: {
      id: follow_id
    }
  }).then(function (follow) {
    if (follow) {
      var text = "你選擇的課程是：\n\n" + follow.content + "／" + follow.teacher + "／" + follow.time + "\n\n已經為你取消追蹤囉 🙂🙂";
      sendTextMessage(sender, text);
      sendGoodbye(sender);
      Follow.destroy({
        where: {
          id: follow_id
        }
      });
    } else {
      var text = "已經為你取消追蹤囉 🙂🙂";
      sendTextMessage(sender, text);
      sendGoodbye(sender);
    }
  });
}

function cancelAllFollowCourse(sender) {
  var text = "沒問題，已經為你取消追蹤囉！";
  sendTextMessage(sender, text);
  sendGoodbye(sender);
  Follow.destroy({
    where: {
      fb_id: sender
    }
  });
}

function sendGoodbye(sender) {
  messageData = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [{
          "title": "NCKUHUB",
          "subtitle": "感謝使用 🙏 希望有幫上你的忙！",
          "buttons": [{
            "type": "postback",
            "title": "再次呼喚小幫手",
            "payload": "callagain",
          }, {
            "type": "postback",
            "title": "用完了，謝謝！",
            "payload": "不客氣，也謝謝你的使用 ☺",
          }],
        }]
      }
    }
  }
  setTimeout(function () {
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
    }, function (error, response, body) {
      if (error) {
        console.log('Error sending messages: ', error)
      } else if (response.body.error) {
        console.log('Error: ', response.body.error)
      }
    })
  }, 3000);
}

function checkCourseRemain() {
  Follow.findAll({
    where: {
      id: id,
      dep_no:{
        [Op.notIn]: disable 
      }
    },
    include: [{
      model: Course,
      required: true,
      attributes: ['remaining', 'dep_no']
    }],
    raw: false
  }).then(function (follow) {
    follow = JSON.parse(JSON.stringify(follow));
    for (var i in follow) {
      if (follow[i].remaining != "額滿" && follow[i].hadNotify == 0) {
        sendRemainNotify(follow[i]);
      } else if (follow[i].remaining == "額滿" && follow[i].hadNotify != 0) {
        Follow.update({
          hadNotify: 0
        }, {
          where: {
            id: follow[i].id
          }
        });
      }
    }
  });
}

function sendRemainNotify(course) {
  var text = "餘額通知（" + course.serial + "）！\n\n" + course.content + "／" + course.teacher + "／" + course.time + "\n\n這門課有 " + course.remaining + " 個餘額了！趕快去選吧 🏄🏄\n\n成大選課連結：https://goo.gl/o8zPZH";
  sendTextMessage(course.fb_id, text);
  Follow.update({
    hadNotify: 1
  }, {
    where: {
      id: course.id
    }
  });
  FollowCopy.update({
    hadNotify: 1
  }, {
    where: {
      id: course.id
    }
  });
}

function searchCourseByName(sender, name) {
  Course.findAll({
    attributes: ['id', 'dep_name', 'course_name', 'time', 'serial'],
    where: {
      course_name: name,
      serial: {
        [Op.ne]: ''
      }
    }
  }).then(function (courses) {
    if (courses.length > 0) {
      if (courses.length > 30) {
        var subtitle = "以下是找到的前 30 筆結果。若要精準搜尋，請輸入 @課程名稱 $系所 %老師名 或 #課程名稱 $系所 %老師名 或 ";
      } else {
        var subtitle = "哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇";
      }
      messageData = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "generic",
            "elements": []
          }
        }
      }
      for (var i in courses) {
        if (i == 30) break;
        if (i % 3 == 0) {
          var card = {
            "title": "NCKUHUB",
            "subtitle": subtitle,
            "buttons": [],
          }
        }
        var data = {
          "type": "postback",
          "title": courses[i].dep_name.replace(/[A-Z0-9]/g, "") + " " + courses[i].course_name.replace(/[（|）|\s]/g, "") + " " + courses[i].time,
          "payload": "ask" + courses[i].serial,
        }
        card["buttons"].push(data);
        if (i % 3 == 2 || i == courses.length - 1) {
          messageData["attachment"]["payload"]["elements"].push(card);
        }
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
      }, function (error, response, body) {
        if (error) {
          console.log('Error sending messages: ', error)
        } else if (response.body.error) {
          console.log('Error: ', response.body.error)
        }
      });
    } else {
      var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
      sendTextMessage(sender, text);
      sendGoodbye(sender);
    }
  });
}

function searchCourseByTeacher(sender, teacher) {
  Course.findAll({
    attributes: ['id', 'dep_name', 'course_name', 'time', 'serial'],
    where: {
      teacher: teacher,
      serial: {
        [Op.ne]: ''
      }
    }
  }).then(function (courses) {
    if (courses.length > 0) {
      if (courses.length > 30) {
        var subtitle = "以下是找到的前 30 筆結果。若要精準搜尋，請輸入 @課程名稱 $系所 %老師名 或 #課程名稱 $系所 %老師名 或 ";
      } else {
        var subtitle = "哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇";
      }
      messageData = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "generic",
            "elements": []
          }
        }
      }
      for (var i in courses) {
        if (i == 30) break;
        if (i % 3 == 0) {
          var card = {
            "title": "NCKUHUB",
            "subtitle": subtitle,
            "buttons": [],
          }
        }
        var data = {
          "type": "postback",
          "title": courses[i].dep_name.replace(/[A-Z0-9]/g, "") + " " + courses[i].course_name.replace(/[（|）|\s]/g, "") + " " + courses[i].time,
          "payload": "ask" + courses[i].serial,
        }
        card["buttons"].push(data);
        if (i % 3 == 2 || i == courses.length - 1) {
          messageData["attachment"]["payload"]["elements"].push(card);
        }
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
      }, function (error, response, body) {
        if (error) {
          console.log('Error sending messages: ', error)
        } else if (response.body.error) {
          console.log('Error: ', response.body.error)
        }
      });
    } else {
      var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
      sendTextMessage(sender, text);
      sendGoodbye(sender);
    }
  });
}

function askPlaceOrFollow(sender, serial) {
  var serial = serial.toUpperCase();
  Course.findAll({
    attributes: ['id', 'dep_name', 'course_name', 'teacher', 'time'],
    where: {
      serial: serial
    }
  }).then(function (courses) {
    if (courses.length > 0) {
      messageData = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "generic",
            "elements": [{
              "title": "NCKUHUB",
              "subtitle": "你選擇的課程是：\n\n" + courses[0].dep_name.replace(/[A-Z0-9]/g, "") + "／" + courses[0].course_name.replace(/[（|）|\s]/g, "") + "／" + courses[0].teacher.replace(/\s/g, "") + "／" + courses[0].time + "\n\n",
              "buttons": [{
                "type": "postback",
                "title": "尋找上課地點",
                "payload": "@" + courses[0].id,
              }, {
                "type": "postback",
                "title": "追蹤課程餘額",
                "payload": "!" + courses[0].id,
              }],
            }]
          }
        }
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
      }, function (error, response, body) {
        if (error) {
          console.log('Error sending messages: ', error)
        } else if (response.body.error) {
          console.log('Error: ', response.body.error)
        }
      });
    } else {
      var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
      sendTextMessage(sender, text);
      sendGoodbye(sender);
    }
  });
}

function sendLink(sender, link) {
  var messageData = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "button",
        "text": link.description,
        "buttons": [{
          "type": "web_url",
          "url": link.url,
          "title": link.title,
          "webview_height_ratio": "compact"
        }]
      }
    }
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
  }, function (error, response, body) {
    if (error) {
      console.log('Error sending messages: ', error)
    } else if (response.body.error) {
      console.log('Error: ', response.body.error)
    }
  });
}

function cancelMsg(sender) {
  FollowCopy.update({
    getMsg: 0
  }, {
    where: {
      fb_id: sender
    }
  }).then(function () {
    sendTextMessage(sender, "成功!你以後將不會再收到NCKUHUB的廣播訊息!");
  });
}

function sendCancelMsg(sender) {
  var messageData = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "button",
        "text": "若你不想再收到NCKUHUB的廣播訊息請按下面按鈕",
        "buttons": [{
          "type": "postback",
          "title": "取消收到訊息",
          "payload": "cancelmsg"
        }]
      }
    }
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
  }, function (error, response, body) {
    if (error) {
      console.log('Error sending messages: ', error)
    } else if (response.body.error) {
      console.log('Error: ', response.body.error)
    }
  });
}

function sendDisableMsg(sender, dept_no) {
  sendTextMessage(sender, "很抱歉! 此階段 " + dept_no + " 課程未開放追蹤餘額!");
}

module.exports = router;