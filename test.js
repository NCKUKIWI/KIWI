messageData = {
  "attachment":{
    "type": "template",
    "payload": {
      "template_type":"generic",
      "elements": [{
        "title": "NCKUHUB",
        "subtitle": "你好，我是 NCKU HUB 新來的小幫手。請問需要什麼幫助嗎？?",
        "buttons": [],
      }]
    }
  }
}

var data = {
  "type": "postback",
  "title": "x",
  "payload":"x",
}
messageData["attachment"]["payload"]["elements"][0]["buttons"].push(data);

console.log(messageData["attachment"]["payload"]["elements"][0]["buttons"]);
