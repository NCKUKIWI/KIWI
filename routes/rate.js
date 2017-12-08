var express = require('express');
var router = express.Router();
var helper = require('../helper');
var Rate = require('../model/Rate');

/* rate form */
router.get('/new/:id', helper.apiAuth(), function(req, res) {
  res.render('rate/new', {
    'courseid': req.params.id,
    'course_name': req.query.course_name,
    'teacher': req.query.teacher
  });
});

router.post('/create', helper.apiAuth(), function(req, res) {
  Rate.findOrCreate({
    where: {
      course_name: req.body.course_name,
      teacher: req.body.teacher,
      user_id: req.user.id
    },
    defaults: {
      sweet: parseInt(req.body.sweet),
      hard: parseInt(req.body.hard),
      recommand: parseInt(req.body.recommand),
      course_name: req.body.course_name,
      teacher: req.body.teacher,
      user_id: req.user.id
    }
  }).spread(function(rate, created) {
    if(created) {
      res.send('ok');
    } else {
      res.send('exist');
    }
  });
});

router.delete('/:id', helper.apiAuth(), function(req, res) {
  Rate.destroy({
    where: {
      id: req.params.id,
      user_id: req.user.id
    }
  }).then(function(result) {
    if(result > 0) {
      res.send('ok');
    } else {
      res.send('noRecord');
    }
  }).catch(function(err) {
    res.send(err);
  });
});

module.exports = router;
