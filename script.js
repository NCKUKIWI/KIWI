var db = require("./model/db");
var update_comment_num = "update course_new set comment_num = (select COUNT(id) from post where post.course_name = course_new.課程名稱 and SUBSTRING(post.teacher, 1, 3) = SUBSTRING(course_new.老師, 1, 3))";
db.Query(update_comment_num,function(result){
  console.log(result);
});
