var express = require('express');
var router = express.Router();
var Rate = require('../model/Rate');

/* rate form */
router.get('/new/:id', function(req, res) {
  if(req.user) {
    res.render('rate/new', {
      'courseid': req.params.id,
      'course_name': req.query.course_name.replace(/\'|\#|\/\*/g, ""),
      'teacher': req.query.teacher.replace(/\'|\#|\/\*/g, "")
    });
  } else {
    res.send('notLogin');
  }
});

router.post('/create', function(req, res) {
  if(req.user) {
    Rate.findOrCreate({
      where: {
        course_name: req.body.course_name.replace(/\'|\#|\/\*/g, ""),
        teacher: req.body.teacher.replace(/\'|\#|\/\*/g, ""),
        user_id: parseInt(req.user.id)
      },
      defaults: {
        sweet: parseInt(req.body.sweet.replace(/\'|\#|\/\*/g, "")),
        hard: parseInt(req.body.hard.replace(/\'|\#|\/\*/g, "")),
        recommand: parseInt(req.body.recommand.replace(/\'|\#|\/\*/g, "")),
        course_name: req.body.course_name.replace(/\'|\#|\/\*/g, ""),
        teacher: req.body.teacher.replace(/\'|\#|\/\*/g, ""),
        user_id: parseInt(req.user.id)
      }
    }).spread(function(rate, created) {
      if(created) {
        res.send('ok');
      } else {
        res.send('exist');
      }
    });
  } else {
    res.send('notLogin');
  }
});

router.delete('/:id', function(req, res) {
  if(req.user) {
    Rate.destory({
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
  } else {
    res.send('notLogin');
  }
});

module.exports = router;
