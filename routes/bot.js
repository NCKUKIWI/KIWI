var express = require('express');
var request = require('request');
var config = require('../config');
var router = express.Router();
var db = require('../model/db');
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
    console.log(event);
    sender = event.sender.id
    console.log(sender);
    if (event.message && event.message.text) {
      text = event.message.text
      if (text === 'hi') {
        sendGenericMessage(sender)
        continue
      }
      sendTextMessage(sender, "parrot: " + text.substring(0, 200))
    }
    if (event.postback) {
      text = JSON.stringify(event.postback)
      sendTextMessage(sender, "Postback received: " + text.substring(0, 200), token)
      continue
    }
  }
  res.sendStatus(200)
})

// function to echo back messages - added by Stefan

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


// Send an test message back as two cards.

function sendGenericMessage(sender) {
  messageData = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [{
          "title": "Chatbots FAQ",
          "subtitle": "Aking the Deep Questions",
          "image_url": "https://tctechcrunch2011.files.wordpress.com/2016/04/facebook-chatbots.png?w=738",
          "buttons": [{
            "type": "postback",
            "title": "What's the benefit?",
            "payload": "Chatbots make content interactive instead of static",
          }, {
            "type": "postback",
            "title": "What can Chatbots do",
            "payload": "One day Chatbots will control the Internet of Things! You will be able to control your homes temperature with a text",
          }, {
            "type": "postback",
            "title": "The Future",
            "payload": "Chatbots are fun! One day your BFF might be a Chatbot",
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


module.exports = router;
