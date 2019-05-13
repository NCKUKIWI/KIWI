var express = require('express');
var request = require('request');
var config = require('../config');
var router = express.Router();
var dbsystem = require('../model/dba');
var DB = require('../model/db');
var gmailSend = require('./gmailSend/gmailSend')
var cache = require("../helper/cache");
var redis = cache.redis;
const apiVersion = "v3.1";
const msg_url = `https://graph.facebook.com/${apiVersion}/me/messages`;
// const token = config.fb.token;
const disable = config.bot.disable;
var disableSQL = '';

/**
 * 載入設定 |START|
 */

//取得所有課程資料
var courseNameList = [];
var courseSerialList = [];
//定時通知餘額
var checkCourse;
var checkCourseStatus = 0;
//廣播訊息標籤
var broadcast_label = {};

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
		checkCourseStatus = 1;
		if (checkCourseStatus == 1) {
			checkCourse = setInterval(function () {
				checkCoureseRemain();
			}, 1000 * 10);
		}
		// db.select().field("*").from("fb_boardcast_labels").run(function (data, err) {
		// 	db = null;
		// 	data.forEach(aLabel => {
		// 		broadcast_label[aLabel.label_name] = aLabel.label_id;
		// 	});
		// });
	});
});

/**
 * 載入設定 |END|
 */

/**
 * 餘額通知機器人開關API |START|
 */

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

/**
 * 餘額通知機器人開關API |END|
 */

/**
 * 廣播訊息 |START|
 */

const msg_creative_url = `https://graph.facebook.com/${apiVersion}/me/message_creatives`;
const msg_broadcast_url = `https://graph.facebook.com/${apiVersion}/me/broadcast_messages`;
const subscribe_broadcast_url = label => `https://graph.facebook.com/${apiVersion}/${broadcast_label[label]}/label`;
const toCancelFollow = {
	"messages": [{
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
	}]
};
const broadcastTextMsg = txt => ({
	"messages": [{
		"text": txt
	}]
});
const broadcastBtnMsg = (txt, btn) => ({
	"messages": [{
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "button",
				"text": txt,
				"buttons": btn
			}
		}
	}]
});
const broadcastLinkMsg = (txt, url, title) => ({
	"messages": [{
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "button",
				"text": txt,
				"buttons": [{
					"type": "web_url",
					"url": url,
					"title": title,
					"webview_height_ratio": "tall"
				}]
			}
		}
	}]
});
const creativeMsgCb = target_label_id => resBody => {
	sendPostRequest({
		url: msg_broadcast_url,
		json: {
			message_creative_id: resBody.message_creative_id,
			notification_type: "REGULAR",
			messaging_type: "MESSAGE_TAG",
			tag: "NON_PROMOTIONAL_SUBSCRIPTION",
			custom_label_id: target_label_id
		}
	});
};
router.post('/broadd',function(req, res){

	var broadcastType = 'broad';
	var target_label_id = broadcast_label[(broadcastType === "broad" ? "tester" : "all_user")];
	console.log(target_label_id)

	sendPostRequest({
		url: msg_creative_url,
		json: broadcastTextMsg('好巧喔比巧克力還巧 測試一下')
	}, creativeMsgCb(target_label_id));
	// let report = '明天早餐吃什麼'
	// 	let buttons = [{
	// 		"type": "postback",
	// 		"title": "A",
	// 		"payload": "reportPass_"
	// 	}, {
	// 		"type": "postback",
	// 		"title": "D",
	// 		"payload": "reportFail_"
	// 	}];
	// 	sendPostRequest({
	// 		url: msg_creative_url,
	// 		json:broadcastBtnMsg(report, buttons)
	// 	}, creativeMsgCb(target_label_id));
})
router.post('/sendmsg', function (req, res) {
	console.log(req.body)
	var broadcastType = req.body.type;
	var target_label_id = broadcast_label[(broadcastType === "test" ? "tester" : "all_user")];
	if (req.body.msg) {
		var msg = req.body.msg;
		if (msg == 'cancelMsg') {
			sendPostRequest({
				url: msg_creative_url,
				json: toCancelFollow
			}, creativeMsgCb(target_label_id));
		} else {
			sendPostRequest({
				url: msg_creative_url,
				json: broadcastTextMsg(msg)
			}, creativeMsgCb(target_label_id));
		}
	} else if (req.body.linktitle && req.body.linkurl) {
		sendPostRequest({
			url: msg_creative_url,
			json: broadcastLinkMsg(req.body.linkdescription, req.body.linkurl, req.body.linktitle)
		}, creativeMsgCb(target_label_id));
	}
	res.send('ok');
});



function subscribeBroadcast(sender, isTester) {
	return sendPostRequest({
		url: subscribe_broadcast_url((isTester ? "tester" : "all_user")),
		json: {
			user: sender
		}
	});
}

function unsubscribeBroadcast(sender) {
	sendRequest({
		url: subscribe_broadcast_url(),
		method: "DELETE",
		qs: {
			user: sender
		}
	});
	sendTextMessage(sender, "成功！你以後將不會再收到NCKUHUB的廣播訊息！");
}

/**
 * 廣播訊息 |END|
 */

/**
 * 文章留言回覆相關宣告 |START|
 */

const forbidden_sender_my_page_name = 'NCKU HUB';
const cmt_keyword_helper = /小幫手/;
const cmt_keyword_course_selection = /.*一.*起.*準.*備.*選.*課.*/;

const cmt_reply = text => ({
	"message": text
});
const cmt_private_reply_hot_courses = cmt_reply("哈囉！雙手奉上成大最熱門追蹤的課程，NCKU HUB 祝你/妳選課順利，也歡迎使用我們的服務尋找課程心得唷！\n\n🎈 成大熱門課程：https://goo.gl/vZxsrW\n🎈 查詢選課心得：https://nckuhub.com\n");
const cmt_private_reply_helper = cmt_reply("你好，請再次輸入「小幫手」，以開啟 NCKU HUB 小幫手的功能唷！");
const cmt_random_reply = [
	"已經私訊給你囉，祝選課順利、開學快樂！",
	"已私訊，快去看訊息有沒有收到唷！",
	"去檢查收件夾吧，我們把熱門排行都放在那裡了！"
];

const get_cmt_reply_url = cid => `https://graph.facebook.com/${apiVersion}/${cid}/comments`;
const get_cmt_private_reply_url = cid => `https://graph.facebook.com/${apiVersion}/${cid}/private_replies`;

function cmtReply(response_cmt, cid) {
	return sendPostRequest({
		url: get_cmt_reply_url(cid),
		json: response_cmt
	});
}

function cmtPrivateReply(response_msg, cid) {
	return sendPostRequest({
		url: get_cmt_private_reply_url(cid),
		json: response_msg
	});
}

/**
 * 文章留言回覆相關宣告 |END|
 */

router.get('/webhook', function (req, res) {
	console.log(req.query['hub.verify_token'])
	if (req.query['hub.verify_token'] === 'nckuhubbver49') {
		res.send(req.query['hub.challenge']);
		console.log("Webhook setting")
	} else {
		res.send('Error, wrong token');
		console.log("wrong")

	}
});

const postback = {
	courseIdFollow: {
		generator: dataGetter => data => `!${dataGetter(data)}`,
		matcher: data => data.match(/^![0-9]{1,}/i), //抓payload中的 course_id 用來追蹤課程
		replacer: data => data.replace(/!|\s/g, "")
	},
	courseIdForceFollow: {
		generator: dataGetter => data => `^${dataGetter(data)}`,
		matcher: data => data.match(/^\^[0-9]{1,}/i), //抓payload中的 course_id 用來強制追蹤課程
		replacer: data => data.replace(/\^|\s/g, "")
	},
	courseIdCancel: {
		generator: dataGetter => data => `&${dataGetter(data)}`,
		matcher: data => data.match(/^&[0-9]{1,}/i), //抓payload中的 course_id 用來取消追蹤課程
		replacer: data => data.replace(/&|\s/g, "")
	},
	courseIdInfo: {
		generator: dataGetter => data => `@${dataGetter(data)}`,
		matcher: data => data.match(/^@[0-9]{1,}/i), //抓payload中的 course_id 用來傳送單一課程詳細資訊
		replacer: data => data.replace(/@|\s/g, "")
	},
	courseIdAsk: {
		generator: dataGetter => data => `ask${dataGetter(data)}`,
		matcher: data => data.match(/^ask[A-Z]{1,2}[0-9]{1,}/i), //抓payload中的 course.選課序號 用來傳送單一課程詳細資訊
		replacer: data => data.replace(/ask|\s/g, "")
	}
};

router.post('/webhook', function (req, res) {
	let body = req.body;
	body.entry.forEach(function (anEntry) {
		if (anEntry.hasOwnProperty('changes')) { // 文章留言
			console.log(anEntry['changes'])
			anEntry.changes.forEach(aChange => {
				if (aChange.field === 'feed' && aChange.value.hasOwnProperty('comment_id') && aChange.value.hasOwnProperty('message')) {
					const msg = aChange.value.message;
					const cid = aChange.value.comment_id;
					const sender = aChange.value.sender_name || aChange.value.from.name;
					if (sender != forbidden_sender_my_page_name) {
						console.log(`[粉專留言] 留言者：『${sender}』訊息：「${msg.replace(/\n/, "\\n")}」`);
						if (cmt_keyword_course_selection.test(msg)) { //留言 一起準備選課囉
							let rdnum = Math.floor(Math.random() * 3);
							let response_cmt = cmt_reply(cmt_random_reply[rdnum]);
							let response_msg = cmt_private_reply_hot_courses;
							cmtReply(response_cmt, cid);
							cmtPrivateReply(response_msg, cid);
						} else if (cmt_keyword_helper.test(msg)) { //留言 小幫手
							let response_msg = cmt_private_reply_helper;
							cmtPrivateReply(response_msg, cid);
						}
					}
				}
			});
		} else if (anEntry.hasOwnProperty('messaging')) { // Messenger
			anEntry.messaging.forEach(event => {
				var sender = event.sender.id; //使用者messenger id
				if (event.message && event.message.text && typeof event.message.is_echo === "undefined") {
					var text = event.message.text; //用戶傳送的訊息
					console.log(`[粉專私訊] 私訊者：『${sender}』訊息：「${text.replace(/\n/, "\\n")}」`);
					if (text.indexOf("小幫手") !== -1) {
						sendHello(sender);
						if (text.indexOf("小幫手我是管理員") !== -1)
							subscribeBroadcast(sender, true);
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
					var courseIdFollow = postback.courseIdFollow.matcher(event.postback.payload); //抓payload中的 course_id 用來追蹤課程
					var courseIdForceFollow = postback.courseIdForceFollow.matcher(event.postback.payload); //抓payload中的 course_id 用來強制追蹤課程
					var courseIdCancel = postback.courseIdCancel.matcher(event.postback.payload); //抓payload中的 course_id 用來取消追蹤課程
					var courseIdInfo = postback.courseIdInfo.matcher(event.postback.payload); //抓payload中的 course_id 用來傳送單一課程詳細資訊
					var courseIdAsk = postback.courseIdAsk.matcher(event.postback.payload);
					let RegPass = /reportPass_/;
					let RegFail = /reportFail_/;
					console.log('pload'+event.postback.payload);
					if (courseIdFollow) {
						courseIdFollow = postback.courseIdFollow.replacer(courseIdFollow[0]);
						addFollowCourse(sender, courseIdFollow);
					} else if (courseIdForceFollow) {
						courseIdForceFollow = postback.courseIdForceFollow.replacer(courseIdForceFollow[0]);
						addFollowCourse(sender, courseIdForceFollow, true);
					} else if (courseIdCancel) {
						courseIdCancel = postback.courseIdCancel.replacer(courseIdCancel[0]);
						cancelFollowCourse(sender, courseIdCancel);
					} else if (courseIdInfo) {
						courseIdInfo = postback.courseIdInfo.replacer(courseIdInfo[0]);
						sendCourseInfo(sender, courseIdInfo);
					} else if (courseIdAsk) {
						courseIdAsk = postback.courseIdAsk.replacer(courseIdAsk[0]);
						askPlaceOrFollow(sender, courseIdAsk);
					} else if (event.postback.payload == "cancelfollow") {
						sendFollowCourseList(sender);
					} else if (event.postback.payload == "callagain") {
						sendHello(sender);
					} else if (event.postback.payload == "cancelall") {
						cancelAllFollowCourse(sender);
					} else if (event.postback.payload == "cancelmsg") {
						unsubscribeBroadcast(sender);
					} else if (event.postback.payload == "dontFollow") {
						sendGoodbye(sender);
					} else if (RegPass.test(event.postback.payload)) {
						sendReportReview(true, event)
					} else if (RegFail.test(event.postback.payload)) {
						sendReportReview(false, event)
					}
					else {
						if (/開始使用/.test(event.postback.payload))
							subscribeBroadcast(sender, false);
						sendTextMessage(sender, event.postback.payload);
					}
				}
			});
		}
	});
	res.sendStatus(200);
});

router.post('/gmailTest', function(req, res){
	gmailSend.sendMail('nckuhub@gmail.com', 'TO 檢舉人： 你的檢舉通過囉')
	res.send('gmailSend')

})


const aCourseButtonTitleGenerator = aCourse => `${aCourse.系所名稱.replace(/[A-Z0-9]/g, "")} ${aCourse.課程名稱.replace(/[（|）|\s]/g, "")} ${aCourse.時間}`;

function sendCoursePlaceByName(sender, name, dpt, teacher) {
	var db = new dbsystem();
	db.select().field(["id", "系所名稱", "課程名稱", "時間", "教室"]).from("course_new").where("課程名稱 LIKE '%" + name + "%'").whereCheck("系所名稱 LIKE '%" + dpt + "%'", dpt).whereCheck("老師 LIKE '%" + teacher + "%'", teacher).run(function (course) {
		db = null;
		if (course.length > 0) {
			var subtitle;
			if (course.length > 30) {
				subtitle = "以下是找到的前 30 筆結果。若要精準搜尋，請輸入 @課程名稱 $系所 %老師名";
			} else {
				subtitle = "哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇";
			}
			sendGenericTemplate(sender, subtitle,
				buttonsGenerator(course, null, "postback",
					aCourseButtonTitleGenerator,
					postback.courseIdInfo.generator(aCourse => aCourse.id)));
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
		course[0].教室 = course[0].教室.replace(/\s/g, "");
		var text = "你選擇的課程是：\n\n" + course[0].系所名稱.replace(/[A-Z0-9]/g, "") + "／" + course[0].課程名稱.replace(/[（|）|\s]/g, "") + "／" + course[0].老師.replace(/\s/g, "") + "／" + course[0].時間;
		var url;
		var title;
		if (course[0].教室 == '') {
			url = "http://course-query.acad.ncku.edu.tw/qry/qry001.php?dept_no=" + course[0].系號;
			title = "點我查看上課地點";
		} else {
			text += "\n\n上課地點在「" + course[0].教室.replace(/\s/g, "") + "」唷！";
			url = "http://www.stat.ncku.edu.tw/workshop/information/map_NCKUPlan.asp";
			title = "系館地圖";
		}
		sendLink(sender, {
			description: text,
			url,
			title
		});
		sendGoodbye(sender);
	});
}

function sendFollowCourseByName(sender, name, dpt, teacher) {
	var db = new dbsystem();
	db.select().field(["id", "系所名稱", "課程名稱", "時間"]).from("course_new").where("課程名稱 LIKE '%" + name + "%'").whereCheck("系所名稱 LIKE '%" + dpt + "%'", dpt).whereCheck("老師 LIKE '%" + teacher + "%'", teacher).run(function (course) {
		db = null;
		if (course.length > 0) {
			var subtitle;
			if (course.length > 30) {
				subtitle = "以下是找到的前 30 筆結果。若要精準搜尋，請輸入 #課程名稱 $系所 %老師名";
			} else {
				subtitle = "哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇";
			}
			sendGenericTemplate(sender, subtitle,
				buttonsGenerator(course, null, "postback",
					aCourseButtonTitleGenerator,
					postback.courseIdFollow.generator(aCourse => aCourse.id)));
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
				var buttons = [{
					"type": "postback",
					"title": "仍要追蹤課程",
					"payload": postback.courseIdForceFollow.generator(aCourse => aCourse.id)(course[0])
				}, {
					"type": "postback",
					"title": "不用追蹤課程",
					"payload": "dontFollow"
				}];
				sendButtonsMessage(sender, text, buttons);
			} else {
				const noExtra = (course[0].餘額 > 0 ? "" : "這堂課目前無餘額，");
				db.select().field("*").from("follow").where("course_id=", course_id).where("fb_id=", sender).run(function (follow) {
					var text;
					if (follow.length < 1) {
						text = "你選擇的課程是：\n\n" + course[0].系所名稱.replace(/[A-Z0-9]/g, "") + "／" + course[0].課程名稱.replace(/[（|）|\s]/g, "") + "／" + course[0].老師.replace(/\s/g, "") + "／" + course[0].時間 + "\n\n" + noExtra + "已為你設定追蹤 👌 有餘額的時候會私訊你唷！請抱著既期待又怕受傷害的心情等候 🙌🙌";
						var data = {
							course_id: course_id,
							fb_id: sender,
							content: course[0].系所名稱.replace(/[A-Z0-9]/g, "") + "／" + course[0].課程名稱.replace(/[（|）|\s]/g, ""),
							time: course[0].時間,
							serial: (course[0].選課序號) ? course[0].選課序號 : "",
							teacher: course[0].老師
						};
						db.insert().into("follow").set(data).run(function (result) {
							db.insert().into("follow_copy").set(data).run(function (result) {}); // for record
						});
					} else {
						text = "你選擇的課程是：\n\n" + course[0].系所名稱.replace(/[A-Z0-9]/g, "") + "／" + course[0].課程名稱.replace(/[（|）|\s]/g, "") + "／" + course[0].老師.replace(/\s/g, "") + "／" + course[0].時間 + "\n\n" + noExtra + "已經為你設定過追蹤囉！";
					}
					sendTextMessage(sender, text);
					sendGoodbye(sender);
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
		if (follow.length > 0) {
			sendGenericTemplate(sender, "以下是你目前追蹤的課程，請問要取消追蹤哪一個呢？",
				buttonsGenerator(follow, {
						"type": "postback",
						"title": "全部取消追蹤",
						"payload": "cancelall",
					},
					"postback",
					aFollow => `${aFollow.content.replace(/\uff0f/g, " ")} ${aFollow.serial}`,
					postback.courseIdCancel.generator(aFollow => aFollow.id)));
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
	var db = new dbsystem();
	db.delete().from("follow").where("fb_id=", sender).run(function (result) {
		var text = "沒問題，已經為你取消追蹤囉！";
		sendTextMessage(sender, text);
		sendGoodbye(sender);
	});
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
	}, true);
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
		});
	});
}

function searchCourseByName(sender, name) {
	var db = new dbsystem();
	db.select().field(["id", "系所名稱", "課程名稱", "時間", "選課序號"]).from("course_new").where("課程名稱=", name).where("選課序號!=", "").run(function (course) {
		db = null;
		if (course.length > 0) {
			var subtitle;
			if (course.length > 30) {
				subtitle = "以下是找到的前 30 筆結果。若要精準搜尋，請輸入 @課程名稱 $系所 %老師名 或 #課程名稱 $系所 %老師名";
			} else {
				subtitle = "哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇";
			}
			sendGenericTemplate(sender, subtitle,
				buttonsGenerator(course, null, "postback",
					aCourseButtonTitleGenerator,
					postback.courseIdAsk.generator(aCourse => aCourse.選課序號)));
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
		if (course.length > 0) {
			var subtitle;
			if (course.length > 30) {
				subtitle = "以下是找到的前 30 筆結果。若要精準搜尋，請輸入 @課程名稱 $系所 %老師名 或 #課程名稱 $系所 %老師名";
			} else {
				subtitle = "哎呀！我找到了這些，請問哪門是你要的呢 😇😇😇";
			}
			sendGenericTemplate(sender, subtitle,
				buttonsGenerator(course, null, "postback",
					aCourseButtonTitleGenerator,
					postback.courseIdAsk.generator(aCourse => aCourse.選課序號)));
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
		if (course.length > 0) {
			sendGenericTemplate(sender,
				`你選擇的課程是：\n\n${course[0].系所名稱.replace(/[A-Z0-9]/g, "")}／${course[0].課程名稱.replace(/[（|）|\s]/g, "")}／${course[0].老師.replace(/\s/g, "")}／${course[0].時間}\n\n`, [{
					"type": "postback",
					"title": "尋找上課地點",
					"payload": postback.courseIdInfo.generator(aCourse => aCourse.id)
				}, {
					"type": "postback",
					"title": "追蹤課程餘額",
					"payload": postback.courseIdFollow.generator(aCourse => aCourse.id)
				}]);
		} else {
			var text = "查無課程唷 😱😱 會不會是這學期沒開課，或是關鍵字有打錯呢？";
			sendTextMessage(sender, text);
			sendGoodbye(sender);
		}
	});
}

const helloMessage = genericTemplateGenerator("你好 👋👋 我是 NCKU HUB 新來的小幫手，請問需要什麼幫助嗎❓", [{
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
}]);

function sendHello(sender) {
	return sendMessage(sender, helloMessage);
}

const goodbyeMessage = genericTemplateGenerator("感謝使用 🙏 希望有幫上你的忙！", [{
	"type": "postback",
	"title": "再次呼喚小幫手",
	"payload": "callagain",
}, {
	"type": "postback",
	"title": "用完了，謝謝！",
	"payload": "不客氣，也謝謝你的使用 🙂",
}]);

function sendGoodbye(sender) {
	setTimeout(function () {
		sendMessage(sender, goodbyeMessage);
	}, 2000);
}

function sendReportReview(pass, event){
	postid = event.postback.payload.split('_')[1];
		DB.FindbyColumn('report_post',['onRead'],{'post_id':postid} ,function(result){
			let broadcastType = 'test';
			// var target_label_id = broadcast_label[(broadcastType === "broad" ? "broad" : "all_user")]; // 正式版
			var target_label_id = broadcast_label[(broadcastType === "test" ? "tester" : "all_user")];
			if(result[0]['onRead'] == 0){ // the report isn't read
				DB.Update('report_post', {'onRead':1, 'reviewer':event.sender.id}, {'post_id':postid} ,function(){})
				// Q: If I remove the cb function , it would cause error 'callback isn't a function', WHY?
				if(pass){
					gmailSend.sendMail('nckuhub@gmail.com', 'TO 檢舉人： 你的檢舉通過囉')
					gmailSend.sendMail('nckuhub@gmail.com', 'TO 被檢舉人： 有人檢舉你的心得，且通過我們審核了，你的心得將會GG喔')	 
					// sendTextMessage(config.bot.test, 'ok！這則心得被通過檢舉, 心得已下架！正在發信通知被檢舉人');
					sendPostRequest({
						url: msg_creative_url,
						json: broadcastTextMsg('以上這則心得被通過檢舉, 心得已下架！正在發信通知被檢舉人')
					}, creativeMsgCb(target_label_id));
					DB.Query(`SELECT * FROM post WHERE id=${postid}`, function(result){
						uid = result[0].user_id;
						data = JSON.stringify(result[0])
						if(uid!=0){
							redis.set(cache.userCourseKey(uid, postid), data,function(){
								DB.DeleteByColumn('post', {'id':postid}, function(){} )
							})
						}
					})
					// DB.Query('INSERT INTO BadPost SELECT * FROM post WHERE id='+postid)
					
				}else{
					gmailSend.sendMail('nckuhub@gmail.com', 'TO 檢舉人： 你的檢舉並沒有通過')	 
					// sendTextMessage(config.bot.test, 'ok！這則心得並沒有通過檢舉門檻 撤銷檢舉！已發信通知檢舉人');
					sendPostRequest({
						url: msg_creative_url,
						json: broadcastTextMsg('以上這則心得並沒有通過檢舉門檻 撤銷檢舉！已發信通知檢舉人')
					}, creativeMsgCb(target_label_id));
				}
			}else{
				console.log('it has been read.')
				sendTextMessage(event.sender.id, '已經有其他測試人員審查過囉～別再按了');
			}
		})
}

function sendDisableMsg(sender, dept_no) {
	sendTextMessage(sender, `很抱歉！此階段 ${dept_no} 課程未開放追蹤餘額！`);
}

/**
 * 
 * @param {Array} dataList 
 * @param {Object} lastButton 
 * @param {String} buttonType
 * @param {function} titleGenerator
 * @param {function} payloadGenerator
 */
function buttonsGenerator(dataList, lastButton, buttonType, titleGenerator, payloadGenerator) {
	var buttons = [];
	var aButton;
	dataList = dataList.splice(0, 30);
	if (lastButton && dataList.length === 30) dataList.pop();
	for (var index in dataList) {
		var aData = dataList[index];
		aButton = {
			"type": buttonType,
			"title": titleGenerator(aData),
			"payload": payloadGenerator(aData)
		};
		buttons.push(aButton);
	}
	if (lastButton) buttons.push(lastButton);
	buttons = buttons.splice(0, 30);
	return buttons;
}

/**
 * 
 * @param {String} subtitle 
 * @param {Array} buttons 
 * @returns {Array} elements
 */
function elementsGenerator(subtitle, buttons) {
	var elements = [];
	var thisElement;
	var thisButtons;
	while (buttons.length > 0) {
		thisButtons = buttons.splice(0, 3);
		thisElement = {
			"title": "NCKUHUB",
			"subtitle": subtitle,
			"buttons": thisButtons
		};
		elements.push(thisElement);
	}
	elements = elements.splice(0, 10);
	return elements;
}


/**
 * 
 * @param {String} subtitle 
 * @param {Array} buttons 
 */
function genericTemplateGenerator(subtitle, buttons) {
	return {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "generic",
				"elements": elementsGenerator(subtitle, buttons)
			}
		}
	};
}

function sendGenericTemplate(sender, subtitle, buttons) {
	return sendMessage(sender, genericTemplateGenerator(subtitle, buttons));
}

function sendLink(sender, link) {
	return sendButtonsMessage(sender, link.description, [{
		"type": "web_url",
		"url": link.url,
		"title": link.title,
		"webview_height_ratio": "tall"
	}]);
}

function sendButtonsMessage(sender, txt, buttons) {
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

function sendTextMessage(sender, text) {
	return sendMessage(sender, {
		text: text
	});
}

function sendMessage(sender, message) {
	return sendPostRequest({
		url: msg_url,
		json: {
			recipient: {
				id: sender
			},
			message: message,
			messaging_type: "RESPONSE"
		}
	});
}

function sendPostRequest(option, cb) {
	Object.assign(option, {
		method: "POST"
	});
	return sendRequest(option, cb);
}

function sendRequest(option, cb) {
	const url = option.url;
	const json = option.json;
	const method = option.method;
	let qs = option.qs || {};
	Object.assign(qs, {
		// access_token: token
	});
	request({
		url,
		qs,
		method,
		json
	}, (error, response, body) => {
		if (error) {
			console.error('[Error | sending request]: ', error);
		} else if (response.body.error) {
			console.error('[Error | facebook reply]: ', response.body.error);
		} else if (cb) {
			cb(body);
		}
	});
}

function sendReport(report_post){
	var broadcastType = 'test';
	var target_label_id = broadcast_label[(broadcastType === "test" ? "tester" : "all_user")]; // 正式版
	// var target_label_id = broadcast_label[(broadcastType === "test" ? "broad" : "all_user")];

	DB.FindbyColumn('post', ['comment'], { "id": report_post['post_id'] }, function (data) {
		let report = '測試中建議關掉通知ＱＱ \n\n'+'檢舉文章: \n\n'+data[0]['comment']+'\n\n'+'檢舉原因: \n\n'+report_post['reason']
		let buttons = [{
			"type": "postback",
			"title": "給過",
			"payload": "reportPass_"+report_post['post_id']
		}, {
			"type": "postback",
			"title": "理由偏爛",
			"payload": "reportFail_"+report_post['post_id']
		}];
		sendPostRequest({
			url: msg_creative_url,
			json:broadcastBtnMsg(report, buttons)
		}, creativeMsgCb(target_label_id));
		// sendPostRequest({
		// 	url: msg_creative_url,
		// 	json: broadcastTextMsg('以上這則心得被通過檢舉, 心得已下架！正在發信通知被檢舉人')
		// }, creativeMsgCb(target_label_id));
		// sendButtonsMessage(config.bot.test, report, buttons);
	});
}


// broadcast labelid: https://developers.facebook.com/docs/messenger-platform/send-messages/broadcast-messages/target-broadcasts/?locale=zh_TW
// user 要記得去訂閱這個粉專 -> 輸入'小幫手我是管理員'
module.exports = {router, sendReport};

