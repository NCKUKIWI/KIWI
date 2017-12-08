var sequelize = require('sequelize');
var Op = sequelize.Op;
var db = require('../model/db');
var Cart = require('../model/Cart');
var Post = require('../model/Post');
var User = require('../model/User');
var Follow = require('../model/Follow');
var Course = require('../model/Course');
var CourseAll = require('../model/CourseAll');

Course.findAll({
  attributes: ['id', 'dep_name', 'course_name', 'time', 'serial'],
  where: {
    course_name: '數學',
    serial: {
      [Op.ne]: ''
    }
  }
}).then(function(courses) {
  console.log(courses);
});
