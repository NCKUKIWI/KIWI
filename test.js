var dbsystem = require('./model/dba');
var db = new dbsystem();
db.select().field(["系所名稱","課程名稱","時間","教室"]).from("course_105_2").where("課程名稱 LIKE '%微積分%'").run(function(course){
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
    if(i%3==2){
      messageData["attachment"]["payload"]["elements"].push(card);
    }
  }
  console.log(messageData["attachment"]["payload"]["elements"]);
});
