var express = require('express');
var router = express.Router();
var Cart = require('../model/Cart');
var Course = require('../model/Course');

/* index  */
router.get('/', function(req, res) {
  if(req.user) {
    Cart.findAll({
      where: { user_id: req.user.id },
      include: [{
        model: Course,
        attributes: ['id','course_name','time'],
        where: { course_id: Sequelize.col('course.id') }
      }]
    }).then(function(carts) {
      res.render('schedule/index', {
        'carts': carts
      });
    });
  } else {
    res.render('schedule/index', {
      'carts': null
    });
  }
});

module.exports = router;
