var Cart = require('../model/Cart');
var CourseAll = require('../model/CourseAll');
var Course = require('../model/Course');
var sequelize = require('sequelize');
var Op = sequelize.Op;

Course.findOne({
  attributes: ['id', 'course_name', 'time'],
  where: { 'serial': 'A61' }
}).then(function(course) {
  console.log(course);
});
