var sequelize = require('sequelize');
var Op = require('sequelize').Op;
var Cart = require('../model/Cart');
var Post = require('../model/Post');
var User = require('../model/User');
var Course = require('../model/Course');
var CourseAll = require('../model/CourseAll');

Cart.findAll({
  attributes: ['course_id'],
  where: { 'user_id': 5 }
}).then(function(cart) {
  console.log(Array.isArray(cart));
});
