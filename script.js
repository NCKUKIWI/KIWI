var cache = require('./helper/cache');
var redis = cache.redis;
var courseCacheKey = cache.courseCacheKey;
var db = require("./model/db");
var update_comment_num = "update course_new set comment_num = (select COUNT(id) from post where post.course_name = course_new.課程名稱 and post.teacher = course_new.老師 )";
db.Query(update_comment_num,function(result){
  console.log(result);
});


/**
 * Refresh redis regularly.
 */
IdArray =[]; // storing ID
sql = "SELECT id FROM course_new WHERE comment_num>0";
db.Query(sql, function(results) {
	for(var c in results)
		IdArray.push(results[c].id);
	for (var i in IdArray){
		(function(id){
			db.query_post2(id, function (courseInfo, comment) {
				console.log(id);
				courseInfo = courseInfo[0];
				courseInfo.comment = 0;
				courseInfo.course_style = 0;
				courseInfo.report_hw = 0;
				courseInfo.score_style = 0;
				for (var i in comment) {
					var buf = comment[i];
					for (var j in comment[i]) {
						if (buf[j] == "無" || buf[j] == "" || !buf[j]) {
							delete buf[j];
							continue;
						}
						courseInfo[j]++;
					}
				}
				db.FindbyColumn('course_rate', ["*"], { course_name: courseInfo.課程名稱, teacher: courseInfo.老師 }, function (rates) {
					var sweet = 0;
					var hard = 0;
					var recommand = 0;
					var rate_count = 0;
					if (rates.length > 0) {
						for (var i in rates) {
							sweet += rates[i].sweet;
							hard += rates[i].hard;
							recommand += rates[i].recommand;
						}
						sweet /= rates.length;
						hard /= rates.length;
						recommand /= rates.length;
						rate_count = rates.length;
					}
					var data = {
						'recommand': recommand,
						'hard': hard,
						'sweet': sweet,
						'rate_count': rate_count,
						'courseInfo': courseInfo,
						'comment': comment,
						'rates': rates
					}
					console.log("redis setting")
					redis.set(courseCacheKey(id), JSON.stringify(data));
				});
			});
		})(IdArray[i])
	}
})

