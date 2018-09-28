var express = require('express');
var request = require('request');
var config = require('../config');
var router = express.Router();
var dbsystem = require('../model/dba');
var FBAPI = "https://graph.facebook.com/v3.1/me/messages";
var token = config.fb.msgtoken;
var token_auto_reply = config.fb.auto_reply;
var disable = config.bot.disable;
var tester = config.bot.tester;
var disableSQL = '';

//取得所有課程資料
var courseNameList = [];
var courseSerialList = [];
//定時通知餘額
var checkCourse;
var checkCourseStatus = 0;

if (disable.length > 0) {
	disableSQL += '系號 NOT IN(';
	for (var i in disable) {
		disableSQL += "\'" + disable[i] + "\'";
		if (i != disable.length - 1) disableSQL += ',';
	}
	disableSQL += ')';
}

var db = new dbsystem();
db.select().field(["課程名稱", "選課序號"]).from("course_new").where("選課序號!=", "").run(function (data, err) {
	for (var i in data) {
		courseNameList.push(data[i].課程名稱);
		courseSerialList.push(data[i].選課序號);
	}
	db.select().field("*").from("setting").where("id=", 1).run(function (data, err) {
		checkCourseStatus = data[0].status;
		if (checkCourseStatus == 1) {
			checkCourse = setInterval(function () {
				checkCoureseRemain();
			}, 1000 * 10);
		}
		db = null;
		delete db;
	});
});

router.post('/sendmsg', function (req, res) {
	if (req.body.pw != "nckuhubsetting") {
		res.send("fail");
	} else {
		if (req.body.type == "test") {
			if (req.body.msg) {
				if (req.body.msg == 'cancelMsg') {
					tester.forEach(aTester => sendCancelMsg(aTester));
				} else {
					tester.forEach(aTester => sendTextMessage(aTester, req.body.msg));
				}
			}
		} else if (req.body.type == "broadcast") {
			var db = new dbsystem();
			db.select().field("distinct fb_id").from("follow_copy").where("getMsg != 0").run(function (users) {
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
				tester.forEach(aTester => sendLink(aTester, {
					url: req.body.linkurl,
					title: req.body.linktitle,
					description: req.body.linkdescription
				}));
			}
		} else if (req.body.type == "broadcast") {
			var db = new dbsystem();
			db.select().field("distinct fb_id").from("follow_copy").where("getMsg != 0").run(function (users) {
				users.forEach(function (user) {
					if (req.body.linktitle && req.body.linkurl) {
						sendLink(user.fb_id, {
							url: req.body.linkurl,
							title: req.body.linktitle,
							description: req.body.linkdescription
						})
					}
				});
			});
		}
		res.send('ok');
	}
});

router.post('/openbot', function (req, res) {
	checkCourse = setInterval(function () {
		checkCoureseRemain();
	}, 1000 * 10);
	var db = new dbsystem();
	db.update().table("setting").set({
		status: 1
	}).where("id=", 1).run(function (result) {});
	checkCourseStatus = 1;
	res.send('ok');
});

router.post('/closebot', function (req, res) {
	clearInterval(checkCourse);
	var db = new dbsystem();
	db.update().table("setting").set({
		status: 0
	}).where("id=", 1).run(function (result) {});
	checkCourseStatus = 0;
	res.send('ok');
});

router.get('/webhook/', function (req, res) {
	if (req.query['hub.verify_token'] === 'nckuhubbver49') {
		res.send(req.query['hub.challenge']);
	}
	res.send('Error, wrong token');
});

/**
 * 文章留言回復相關宣告 |START|
 */

const forbidden_sender_my_page_name = 'NCKU HUB';
const cmt_keyword_helper = /小幫手/;
const cmt_keyword_course_selection = /.*一.*起.*準.*備.*選.*課.*/;

const cmt_reply = text => ({
	"message": text
});
const cmt_private_reply_hot_courses = () => ({
	"message": "哈囉！雙手奉上成大最熱門追蹤的課程，NCKU HUB 祝你/妳選課順利，也歡迎使用我們的服務尋找課程心得唷！\n\n🎈 成大熱門課程：https://goo.gl/vZxsrW\n🎈 查詢選課心得：https://nckuhub.com\n"
});
const cmt_private_reply_helper = () => ({
	"message": "你好，請再次輸入「小幫手」，以開啟 NCKU HUB 小幫手的功能唷！"
});
const cmt_random_reply = [
	"已經私訊給你囉，祝選課順利、開學快樂！",
	"已私訊，快去看訊息有沒有收到唷！",
	"去檢查收件夾吧，我們把熱門排行都放在那裡了！"
];

const get_cmt_reply_url = cid => `https://graph.facebook.com/v3.0/${cid}/comments`;
const get_cmt_private_reply_url = cid => `https://graph.facebook.com/v3.0/${cid}/private_replies`;

function cmtReply(response_cmt, cid) {
	return sendPostRequest({
		url: get_cmt_reply_url(cid),
		access_token: token_auto_reply,
		json: response_cmt
	});
}

function cmtPrivateReply(response_msg, cid) {
	return sendPostRequest({
		url: get_cmt_private_reply_url(cid),
		access_token: token_auto_reply,
		json: response_msg
	});
}

/**
 * 文章留言回復相關宣告 |END|
 */

router.post('/webhook/', function (req, res) {
	let body = req.body;
	body.entry.forEach(function (anEntry) {
		if (anEntry.hasOwnProperty('changes')) { // 文章留言
			anEntry.changes.forEach(aChange => {
				if (aChange.field === 'feed' && aChange.value.hasOwnProperty('comment_id')) {
					const msg = aChange.value.message;
					const cid = aChange.value.comment_id;
					const sender = aChange.value.from.name;
					if (sender != forbidden_sender_my_page_name) {
						console.log("留言者：" + sender + "訊息：" + msg);
						if (cmt_keyword_course_selection.test(msg)) { //留言 一起準備選課囉
							var rdnum = Math.floor(Math.random() * 3);
							var response_cmt = cmt_reply(cmt_random_reply[rdnum]);
							var response_msg = cmt_private_reply_hot_courses();
							cmtReply(response_cmt, cid);
							cmtPrivateReply(response_msg, cid);
						} else if (cmt_keyword_helper.test(msg)) { //留言 小幫手
							var response_msg = cmt_private_reply_helper();
							cmtPrivateReply(response_msg, cid);
						}
					}
				}
			});
		} else if (anEntry.hasOwnProperty('messaging')) { // Messenger
			anEntry.messaging.forEach(event => {
				var sender = event.sender.id; //使用者messenger id
				if (event.message && event.message.text) {
					var text = event.message.text; //用戶傳送的訊息
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
					var courseIdForceFollow = event.postback.payload.match(/^\^[0-9]{1,}/i); //抓payload中的 course_id 用來強制追蹤課程
					var courseIdCancel = event.postback.payload.match(/^&[0-9]{1,}/i); //抓payload中的 course_id 用來取消追蹤課程
					var courseIdInfo = event.postback.payload.match(/^@[0-9]{1,}/i); //抓payload中的 course_id 用來傳送單一課程詳細資訊
					if (courseIdFollow) {
						courseIdFollow = courseIdFollow[0].replace(/!|\s/g, "");
						addFollowCourse(sender, courseIdFollow);
					} else if (courseIdForceFollow) {
						courseIdForceFollow = courseIdForceFollow[0].replace(/\^|\s/g, "");
						addFollowCourse(sender, courseIdForceFollow, true);
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
						} else if (event.postback.payload == "dontFollow") {
							sendGoodbye(sender);
						} else if (event.postback.payload.indexOf("ask") !== -1) {
							askPlaceOrFollow(sender, event.postback.payload.replace("ask", ""));
						} else {
							sendTextMessage(sender, event.postback.payload);
						}
					}
				}
			});
		}
	});
	res.sendStatus(200);
});

function sendCoursePlaceByName(sender, name, dpt, teacher) {
	var db = new dbsystem();
	db.select().field(["id", "系所名稱", "課程名稱", "時間", "教室"]).from("course_new").where("課程名稱 LIKE '%" + name + "%'").whereCheck("系所名稱 LIKE '%" + dpt + "%'", dpt).whereCheck("老師 LIKE '%" + teacher + "%'", teacher).run(function (course) {
		db = null;
		delete db;
		if (course.length > 0) {
			var subtitle;
			if (course.length > 30) {
				subtitle = "以下是找到的前 30 筆結果。若要精準搜尋，請輸入 @課程名稱 $系所 %老師名";
			} else {
				subtitle = "哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇";
			}
			messageData = {
				"attachment": {
					"type": "template",
					"payload": {
						"template_type": "generic",
						"elements": []
					}
				}
			};
			for (var i in course) {
				var card;
				if (i == 30) break;
				if (i % 3 == 0) {
					card = {
						"title": "NCKUHUB",
						"subtitle": subtitle,
						"buttons": [],
					};
				}
				var data = {
					"type": "postback",
					"title": course[i].系所名稱.replace(/[A-Z0-9]/g, "") + " " + course[i].課程名稱.replace(/[（|）|\s]/g, "") + " " + course[i].時間,
					"payload": "@" + course[i].id,
				};
				card.buttons.push(data);
				if (i % 3 == 2 || i == course.length - 1) {
					messageData.attachment.payload.elements.push(card);
				}
			}
			sendMessage(sender, messageData);
		} else {
			var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
			sendTextMessage(sender, text);
			sendGoodbye(sender);
		}
	});
}

function sendCoursePlaceById(sender, serial) {
	serial = serial.toUpperCase();
	var db = new dbsystem();
	db.select().field(["id"]).from("course_new").where("選課序號=", serial).run(function (course) {
		db = null;
		delete db;
		if (course.length > 0) {
			sendCourseInfo(sender, course[0].id);
		} else {
			var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
			sendTextMessage(sender, text);
			sendGoodbye(sender);
		}
	});
}

function sendCourseInfo(sender, course_id) {
	var db = new dbsystem();
	db.select().field(["系號", "系所名稱", "課程名稱", "時間", "教室", "老師"]).from("course_new").where("id=", course_id).run(function (course) {
		db = null;
		delete db;
		course[0].教室 = course[0].教室.replace(/\s/g, "");
		if (course[0].教室 == '') {
			var text = "你選擇的課程是：\n\n" + course[0].系所名稱.replace(/[A-Z0-9]/g, "") + "／" + course[0].課程名稱.replace(/[（|）|\s]/g, "") + "／" + course[0].老師.replace(/\s/g, "") + "／" + course[0].時間 + "\n\n上課地點請查看 http://course-query.acad.ncku.edu.tw/qry/qry001.php?dept_no=" + course[0].系號;
		} else {
			var text = "你選擇的課程是：\n\n" + course[0].系所名稱.replace(/[A-Z0-9]/g, "") + "／" + course[0].課程名稱.replace(/[（|）|\s]/g, "") + "／" + course[0].老師.replace(/\s/g, "") + "／" + course[0].時間 + "\n\n上課地點在「" + course[0].教室.replace(/\s/g, "") + "」唷！\n系館地圖：https://bit.ly/2p0XfBH。";
		}
		sendTextMessage(sender, text);
		sendGoodbye(sender);
	});
}

function sendFollowCourseByName(sender, name, dpt, teacher) {
	var db = new dbsystem();
	db.select().field(["id", "系所名稱", "課程名稱", "時間"]).from("course_new").where("課程名稱 LIKE '%" + name + "%'").whereCheck("系所名稱 LIKE '%" + dpt + "%'", dpt).whereCheck("老師 LIKE '%" + teacher + "%'", teacher).run(function (course) {
		db = null;
		delete db;
		if (course.length > 0) {
			var subtitle;
			if (course.length > 30) {
				subtitle = "以下是找到的前 30 筆結果。若要精準搜尋，請輸入 #課程名稱 $系所 %老師名";
			} else {
				subtitle = "哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇";
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
			for (var i in course) {
				var card;
				if (i == 30) break;
				if (i % 3 == 0) {
					card = {
						"title": "NCKUHUB",
						"subtitle": subtitle,
						"buttons": [],
					};
				}
				var data = {
					"type": "postback",
					"title": course[i].系所名稱.replace(/[A-Z0-9]/g, "") + " " + course[i].課程名稱.replace(/[（|）|\s]/g, "") + " " + course[i].時間,
					"payload": "!" + course[i].id
				};
				card.buttons.push(data);
				if (i % 3 == 2 || i == course.length - 1) {
					messageData.attachment.payload.elements.push(card);
				}
			}
			sendMessage(sender, messageData);
		} else {
			var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
			sendTextMessage(sender, text);
			sendGoodbye(sender);
		}
	});
}

function sendFollowCourseById(sender, serial) {
	serial = serial.toUpperCase();
	var db = new dbsystem();
	db.select().field(["id"]).from("course_new").where("選課序號=", serial).run(function (course) {
		if (course.length > 0) {
			addFollowCourse(sender, course[0].id);
		} else {
			var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
			sendTextMessage(sender, text);
			sendGoodbye(sender);
		}
	});
}

function addFollowCourse(sender, course_id, force = false) {
	var db = new dbsystem();
	db.select().field(["id", "系所名稱", "系號", "課程名稱", "時間", "餘額", "選課序號", "老師"]).from("course_new").where("id=", course_id).run(function (course) {
		if (disable.indexOf(course[0]['系號']) == -1) {
			if (course[0].餘額 > 0 && !force) {
				var text = "你選擇的課程是：\n\n" + course[0].系所名稱.replace(/[A-Z0-9]/g, "") + "／" + course[0].課程名稱.replace(/[（|）|\s]/g, "") + "／" + course[0].老師.replace(/\s/g, "") + "／" + course[0].時間 + "\n\n這堂課目前還有餘額！趕快去選吧 🙌🙌\n\n成大選課連結：https://goo.gl/o8zPZH";
				// sendTextMessage(sender, text);
				var buttons = [{
					"type": "postback",
					"title": "仍要追蹤課程",
					"payload": "^" + course[0].id
				}, {
					"type": "postback",
					"title": "不用追蹤課程",
					"payload": "dontFollow"
				}];
				sendButtonsMsg(sender, text, buttons);
			} else {
				const noExtra = (course[0].餘額 > 0 ? "" : "這堂課目前無餘額，");
				db.select().field("*").from("follow").where("course_id=", course_id).where("fb_id=", sender).run(function (follow) {
					if (follow.length < 1) {
						var text = "你選擇的課程是：\n\n" + course[0].系所名稱.replace(/[A-Z0-9]/g, "") + "／" + course[0].課程名稱.replace(/[（|）|\s]/g, "") + "／" + course[0].老師.replace(/\s/g, "") + "／" + course[0].時間 + "\n\n" + noExtra + "已為你設定追蹤 👌 有餘額的時候會私訊你唷！請抱著既期待又怕受傷害的心情等候 🙌🙌";
						sendTextMessage(sender, text);
						sendGoodbye(sender);
						var data = {
							course_id: course_id,
							fb_id: sender,
							content: course[0].系所名稱.replace(/[A-Z0-9]/g, "") + "／" + course[0].課程名稱.replace(/[（|）|\s]/g, ""),
							time: course[0].時間,
							serial: (course[0].選課序號) ? course[0].選課序號 : "",
							teacher: course[0].老師
						};
						db.insert().into("follow").set(data).run(function (result) {
							//for record
							db.insert().into("follow_copy").set(data).run(function (result) {});
						});
					} else {
						var text = "你選擇的課程是：\n\n" + course[0].系所名稱.replace(/[A-Z0-9]/g, "") + "／" + course[0].課程名稱.replace(/[（|）|\s]/g, "") + "／" + course[0].老師.replace(/\s/g, "") + "／" + course[0].時間 + "\n\n" + noExtra + "已經為你設定過追蹤囉！";
						sendTextMessage(sender, text);
						sendGoodbye(sender);
					}
				});
			}
		} else {
			sendDisableMsg(sender, course[0]['系號']);
		}
	});
}

function sendFollowCourseList(sender) {
	var db = new dbsystem();
	db.select().field(["*"]).from("follow").where("fb_id=", sender).run(function (follow) {
		db = null;
		delete db;
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
				var card;
				if (i == 30) break;
				if (i % 3 == 0) {
					card = {
						"title": "NCKUHUB",
						"subtitle": "以下是你目前追蹤的課程，請問要取消追蹤哪一個呢？",
						"buttons": [],
					};
				}
				var data = {
					"type": "postback",
					"title": follow[i].content.replace(/\uff0f/g, " ") + " " + follow[i].serial,
					"payload": "&" + follow[i].id,
				}
				card.buttons.push(data);
				if (i % 3 == 2 || i == follow.length - 1) {
					messageData.attachment.payload.elements.push(card);
				}
			}
			var lastCardIndex = messageData.attachment.payload.elements.length - 1;
			var cancelAllButton = {
				"type": "postback",
				"title": "全部取消追蹤",
				"payload": "cancelall",
			};
			if (messageData.attachment.payload.elements[lastCardIndex].buttons.length === 3) {
				messageData.attachment.payload.elements[lastCardIndex].buttons[2] = cancelAllButton;
			} else {
				messageData.attachment.payload.elements[lastCardIndex].buttons.push(cancelAllButton);
			}
			sendMessage(sender, messageData);
		} else {
			var text = "目前沒有追蹤中的課程喔！";
			sendTextMessage(sender, text);
			sendGoodbye(sender);
		}
	});
}

function cancelFollowCourse(sender, follow_id) {
	var db = new dbsystem();
	db.select().field(["content", "teacher", "time"]).from("follow").where("id=", follow_id).run(function (follow) {
		var text;
		if (follow.length > 0) {
			text = "你選擇的課程是：\n\n" + follow[0].content + "／" + follow[0].teacher + "／" + follow[0].time + "\n\n已經為你取消追蹤囉 🙂🙂";
			db.delete().from("follow").where("id=", follow_id).run(function (result) {});
		} else {
			text = "已經為你取消追蹤囉 🙂🙂";
		}
		sendTextMessage(sender, text);
		sendGoodbye(sender);
	});
}

function cancelAllFollowCourse(sender) {
	var text = "沒問題，已經為你取消追蹤囉！";
	sendTextMessage(sender, text);
	sendGoodbye(sender);
	var db = new dbsystem();
	db.delete().from("follow").where("fb_id=", sender).run(function (result) {});
}

function sendGoodbye(sender) {
	setTimeout(function () {
		sendMessage(sender, {
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
		});
	}, 2000);
}

function checkCoureseRemain() {
	var db = new dbsystem();
	db.select().field(["f.*", "c.餘額", "c.系號"]).from("follow f").join("course_new c").where("c.id=f.course_id").where(disableSQL).run(function (follow) {
		for (var i in follow) {
			if (follow[i].餘額 != 0 && follow[i].hadNotify == 0) {
				sendNotify(follow[i]);
			} else if (follow[i].餘額 == 0 && follow[i].hadNotify != 0) {
				db.update().table("follow").set({
					hadNotify: 0
				}).where("id=", follow[i].id).run(function (result) {});
			}
		}
	});
}

function sendNotify(course) {
	var text = "餘額通知（" + course.serial + "）！\n\n" + course.content + "／" + course.teacher + "／" + course.time + "\n\n這門課有個餘額了！趕快去選吧 🏄🏄\n\n成大選課連結：https://goo.gl/o8zPZH";
	sendTextMessage(course.fb_id, text);
	var db = new dbsystem();
	db.update().table("follow").set({
		hadNotify: 1
	}).where("id=", course.id).run(function (result) {
		//for record
		db.update().table("follow_copy").set({
			hadNotify: 1
		}).where("id=", course.id).run(function (result) {
			db = null;
			delete db;
		});
	});
}

function searchCourseByName(sender, name) {
	var db = new dbsystem();
	db.select().field(["id", "系所名稱", "課程名稱", "時間", "選課序號"]).from("course_new").where("課程名稱=", name).where("選課序號!=", "").run(function (course) {
		db = null;
		delete db;
		if (course.length > 0) {
			var subtitle;
			if (course.length > 30) {
				subtitle = "以下是找到的前 30 筆結果。若要精準搜尋，請輸入 @課程名稱 $系所 %老師名 或 #課程名稱 $系所 %老師名 或 ";
			} else {
				subtitle = "哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇";
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
			for (var i in course) {
				var card;
				if (i == 30) break;
				if (i % 3 == 0) {
					card = {
						"title": "NCKUHUB",
						"subtitle": subtitle,
						"buttons": [],
					};
				}
				var data = {
					"type": "postback",
					"title": course[i].系所名稱.replace(/[A-Z0-9]/g, "") + " " + course[i].課程名稱.replace(/[（|）|\s]/g, "") + " " + course[i].時間,
					"payload": "ask" + course[i].選課序號,
				};
				card.buttons.push(data);
				if (i % 3 == 2 || i == course.length - 1) {
					messageData.attachment.payload.elements.push(card);
				}
			}
			sendMessage(sender, messageData);
		} else {
			var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
			sendTextMessage(sender, text);
			sendGoodbye(sender);
		}
	});
}

function searchCourseByTeacher(sender, teacher) {
	var db = new dbsystem();
	db.select().field(["id", "系所名稱", "課程名稱", "時間", "選課序號"]).from("course_new").where("老師=", teacher).where("選課序號!=", "").run(function (course) {
		db = null;
		delete db;
		if (course.length > 0) {
			var subtitle;
			if (course.length > 30) {
				subtitle = "以下是找到的前 30 筆結果。若要精準搜尋，請輸入 @課程名稱 $系所 %老師名 或 #課程名稱 $系所 %老師名 或 ";
			} else {
				subtitle = "哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇";
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
			for (var i in course) {
				var card;
				if (i == 30) break;
				if (i % 3 == 0) {
					card = {
						"title": "NCKUHUB",
						"subtitle": subtitle,
						"buttons": [],
					};
				}
				var data = {
					"type": "postback",
					"title": course[i].系所名稱.replace(/[A-Z0-9]/g, "") + " " + course[i].課程名稱.replace(/[（|）|\s]/g, "") + " " + course[i].時間,
					"payload": "ask" + course[i].選課序號,
				}
				card.buttons.push(data);
				if (i % 3 == 2 || i == course.length - 1) {
					messageData.attachment.payload.elements.push(card);
				}
			}
			sendMessage(sender, messageData);
		} else {
			var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
			sendTextMessage(sender, text);
			sendGoodbye(sender);
		}
	});
}

function askPlaceOrFollow(sender, serial) {
	serial = serial.toUpperCase();
	var db = new dbsystem();
	db.select().field(["id", "系所名稱", "課程名稱", "老師", "時間"]).from("course_new").where("選課序號=", serial).run(function (course) {
		db = null;
		delete db;
		if (course.length > 0) {
			messageData = {
				"attachment": {
					"type": "template",
					"payload": {
						"template_type": "generic",
						"elements": [{
							"title": "NCKUHUB",
							"subtitle": "你選擇的課程是：\n\n" + course[0].系所名稱.replace(/[A-Z0-9]/g, "") + "／" + course[0].課程名稱.replace(/[（|）|\s]/g, "") + "／" + course[0].老師.replace(/\s/g, "") + "／" + course[0].時間 + "\n\n",
							"buttons": [{
								"type": "postback",
								"title": "尋找上課地點",
								"payload": "@" + course[0].id,
							}, {
								"type": "postback",
								"title": "追蹤課程餘額",
								"payload": "!" + course[0].id,
							}],
						}]
					}
				}
			}
			sendMessage(sender, messageData);
		} else {
			var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
			sendTextMessage(sender, text);
			sendGoodbye(sender);
		}
	});
}

function sendLink(sender, link) {
	return sendMessage(sender, {
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
	});
}

function sendButtonsMsg(sender, txt, buttons) {
	return sendMessage(sender, {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "button",
				"text": txt,
				"buttons": buttons
			}
		}
	});
}

function sendHelloMessage(sender) {
	return sendMessage(sender, {
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
	});
}

function sendCancelMsg(sender) {
	return sendMessage(sender, {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "button",
				"text": "不想再收到 NCKU HUB 的訊息，請按以下按鈕：",
				"buttons": [{
					"type": "postback",
					"title": "取消訂閱",
					"payload": "cancelmsg"
				}]
			}
		}
	});
}

function cancelMsg(sender) {
	var db = new dbsystem();
	db.update().table("follow_copy").set({
		getMsg: 0
	}).where("fb_id=", sender).run(function (result) {
		db = null;
		delete db;
		sendTextMessage(sender, "成功!你以後將不會再收到NCKUHUB的廣播訊息!");
	});
}

function sendDisableMsg(sender, dept_no) {
	sendTextMessage(sender, "很抱歉! 此階段 " + dept_no + " 課程未開放追蹤餘額!");
}

function sendTextMessage(sender, text) {
	return sendMessage(sender, {
		text: text
	});
}

function sendMessage(sender, message) {
	return sendPostRequest({
		url: FBAPI,
		access_token: token,
		json: {
			recipient: {
				id: sender
			},
			message: message
		}
	});
}

function sendPostRequest(option, cb) {
	const url = option.url;
	const access_token = option.access_token;
	const json = option.json;
	request({
		url: url,
		qs: {
			access_token: access_token
		},
		method: "POST",
		json: json
	}, (error, response, body) => {
		if (error) {
			console.error('[Error | sending request]: ', error)
		} else if (response.body.error) {
			console.error('[Error | facebook reply]: ', response.body.error)
		}
		if (cb) {
			cb();
		}
	});
}

module.exports = router;