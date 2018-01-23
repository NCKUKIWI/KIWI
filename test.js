var dbsys = require('./model/dba');
var db = new dbsys();
db.select().field(["系所名稱", "課程名稱", "時間", "餘額", "選課序號", "老師"]).from("course_new").where("id=18914").run(function (course) {
  console.log(course);
});