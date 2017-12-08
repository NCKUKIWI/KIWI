var express = require('express');
var router = express.Router();
var helper = require('../helper');
var Post = require('../model/Post');
var Rate = require('../model/Rate');
var ReportPost = require('../model/ReportPost');
var CourseAll = require('../model/CourseAll');

/* create */
router.post('/create', helper.apiAuth(), function(req, res) {
  var post = {
    course_name: req.body.course_name.replace(/\'|\#|\/\*/g, ""),
    teacher: req.body.teacher.replace(/\'|\#|\/\*/g, ""),
    semester: req.body.semester.replace(/\'|\#|\/\*/g, ""),
    catalog: req.body.catalog.replace(/\'|\#|\/\*/g, ""),
    comment: req.body.comment.replace(/\n/g, "<br>").replace(/\'|\#|\/\*/g, "").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""),
    report_hw: req.body.report_hw.replace(/\'|\#|\/\*/g, ""),
    course_style: req.body.course_style.replace(/\'|\#|\/\*/g, ""),
    user_id: parseInt(req.user.id)
  }
  Post.create(post).then(function(result) {
    var rate = {
      sweet: parseInt(req.body.sweet.replace(/\'|\#|\/\*/g, "")),
      hard: parseInt(req.body.hard.replace(/\'|\#|\/\*/g, "")),
      recommand: parseInt(req.body.recommand.replace(/\'|\#|\/\*/g, "")),
      give: parseInt(req.body.give.replace(/\'|\#|\/\*/g, "")),
      got: parseInt(req.body.got.replace(/\'|\#|\/\*/g, "")),
      course_name: req.body.course_name.replace(/\'|\#|\/\*/g, ""),
      teacher: req.body.teacher.replace(/\'|\#|\/\*/g, ""),
      user_id: result.user_id,
      post_id: result.id
    }
    Rate.create(rate).then(function(result) {
      res.send('ok');
    }).catch(function(err) {
      res.send(err);
    });
  }).catch(function(err) {
    res.send(err);
  });
});

/* new */
router.get('/new', helper.checkLogin(), function(req, res) {
  var semester = '';
  if(new Date().getMonth() + 1 > 6) {
    semester = (new Date().getFullYear() - 1912) + '-2';
  } else {
    semester = (new Date().getFullYear() - 1911) + '-1';
  }
  CourseAll.findAll({
    attributes: [
      [sequelize.fn('DISTINCT', sequelize.col('course_name')), 'course_name'], 'id', 'teacher', 'dep_name'
    ],
    where: { 'semester': semester }
  }).then(function(courses) {
    res.render('post/new', {
      'courses': courses
    });
  }).catch(function(err) {
    res.send(err);
  });
});

/* show */
router.get('/:id', function(req, res) {
  var id = req.params.id;
  if(id.match(/\D/g)) {
    res.redirect('/');
  } else {
    Post.findOne({
      where: { id: id },
      include: [{
        model: Rate,
        required: true,
        attributes: ['give', 'got', 'hard', 'sweet', 'recommand']
      }],
      raw: false
    }).then(function(post) {
      res.render('post/show', {
        'post': post
      });
    });
  }
});

/*report post */
router.post('/report/:id', helper.apiAuth(), function(req, res) {
  var reason = "";
  switch(req.query.type) {
    case 'A':
      reason = "不實內容";
      break;
    case 'B':
      reason = "辱罵";
      break;
    default:
      reason = "無";
      break;
  }
  ReportPost.findOrCreate({
    where: { 'post_id': req.params.id, 'user_id': req.user.id },
    defaults: {
      'user_id': req.user.id,
      'post_id': req.params.id,
      'reason': reason
    }
  }).spread(function(report, created) {
    if(created) {
      Post.update({
        report_count: sequelize.literal('report_count +1')
      }, {
        where: { id: req.params.id }
      }).then(function() {
        res.send('ok');
      }).catch(function(err) {
        res.send(err);
      });
    } else {
      res.send('exist');
    }
  });
});

/* del */
router.delete('/:id', helper.apiAuth(), function(req, res) {
  Post.destory({
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
