var db = require("./model/db");

let getCourseNew = "SELECT * FROM course_new"
db.Query(getCourseNew, function (courseData) {
  for (r in courseData) {
    let courseInfo = courseData[r];
    let teachers = courseInfo["老師"].replace(/　/i, "");
    let firstTeacher = "%" + teachers.split(/\s|\*/g)[0] + "%";
    let countPostNumber = "SELECT COUNT(*) ";
    countPostNumber += "FROM post WHERE teacher like " + "\'" + firstTeacher + "\' ";
    countPostNumber += "AND course_name = " + "\'" + courseInfo["課程名稱"] + "\'" + " ORDER BY semester DESC";

    db.Query(countPostNumber, function (comment_num) {
       db.Query("UPDATE course_new SET comment_num="+comment_num[0]["COUNT(*)"]+" WHERE id="+courseInfo['id'],function(){});
    });
  }
});