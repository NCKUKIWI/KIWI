var Cart = require('../model/Cart');
var Course = require('../model/Course');
var Sequelize = require('Sequelize');

Cart.findAll({
  where: { user_id: 1 },
  include: [{
    model: Course,
    attributes: ['id', 'course_name', 'time'],
    where: { course_id: Sequelize.col('course.id') }
  }]
}).then(function(carts) {
  console.log(carts);
}).catch(function(err){
  console.log(err);
});
