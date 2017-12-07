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
        required: true,
        attributes: ['id', 'course_name']
      }],
      raw: false
    }).then(function(carts) {
      carts = JSON.parse(JSON.stringify(carts));
      res.render('schedule/index', {
        'carts': carts
      });
    }).catch(function(err) {
      console.log(err);
    });
  } else {
    res.render('schedule/index', {
      'carts': null
    });
  }
});

module.exports = router;
