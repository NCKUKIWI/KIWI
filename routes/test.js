var Cart = require('../model/Cart');
var CourseAll = require('../model/CourseAll');
var sequelize = require('sequelize');

CourseAll.findAll({
  attributes: [
    [sequelize.fn('DISTINCT', sequelize.col('course_name')), 'course_name'],
    'id',
    'teacher',
    'dep_name'
  ],
  where: { 'semester': '105-2' }
}).then(function(course) {
  console.log(course);
}).catch(function(err) {
  console.log(err);
});
