var express = require('express');
var router = express.Router();
var helper = require('../helper');
var Post = require('../model/Post');
var Rate = require('../model/Rate');
var Cart = require('../model/Cart');
var Course = require('../model/Course');
var Op = require('sequelize').Op;

/* index */
router.get('/', function(req, res) {
  var allCourses = [];
  Course.findAll({
    attributes: ['id', 'course_name', 'dep_no', 'class_no', 'class', 'dep_name', 'teacher', 'time', 'comment_num'],
    order: [['id', 'DESC']]
  }).then(function(courses) {
    allCourses = courses;
    if(req.query.hasOwnProperty("queryw")) {
      var Query = req.query.queryw.replace(/\'|\#|\/\*/g, "").split(" ");
      Query = Query.map(function(query) {
        return {
          course_name: {
            [Op.like]: `%${query}%`
          }
        }
      });
      Course.findAll({
        attributes: ['id', 'course_name', 'dep_no', 'class_no', 'class', 'dep_name', 'teacher', 'time', 'comment_num'],
        where: {
          [Op.or]: Query
        }
      }).then(function(customCourses) {
        checkLogin(req, res, allCourses, customCourses);
      });
    } else if(req.query.hasOwnProperty("teacher")) {
      Course.findAll({
        attributes: ['id', 'course_name', 'dep_no', 'class_no', 'class', 'dep_name', 'teacher', 'time', 'comment_num'],
        where: { 'teacher': req.query.teacher }
      }).then(function(customCourses) {
        checkLogin(req, res, allCourses, customCourses);
      });
    } else if(req.query.hasOwnProperty("course_name")) {
      Course.findAll({
        attributes: ['id', 'course_name', 'dep_no', 'class_no', 'class', 'dep_name', 'teacher', 'time', 'comment_num'],
        where: { 'course_name': req.query.course_name }
      }).then(function(customCourses) {
        checkLogin(req, res, allCourses, customCourses);
      });
    } else if(req.query.hasOwnProperty("catalog")) {
      Course.findAll({
        attributes: ['id', 'course_name', 'dep_no', 'class_no', 'class', 'dep_name', 'teacher', 'time', 'comment_num'],
        where: { 'dep_no': req.query.catalog }
      }).then(function(customCourses) {
        checkLogin(req, res, allCourses, customCourses);
      });
    } else {
      checkLogin(req, res, allCourses, []);
    }
  });
});

/*傳入所有課程 */
router.get('/allCourse', function(req, res) {

  Course.findAll({
    attributes: ['id', 'course_name', 'dep_no', 'class_no', 'class', 'dep_name', 'teacher', 'time', 'comment_num'],
    order: [['id', 'DESC']]
  }).then(function(courses) {
    var nowCourse = [];
    var nowCourse_hasComment = []; // 裝nowCourse的有comment的課程
    var courses_Department = {}; // 用來分類所有系所，下面使用object property的方式逐一分類

    for(var i in courses) {
      nowCourse.push(courses[i]);
      if(courses[i].comment_num != 0) nowCourse_hasComment.push(courses[i]);
      if(courses_Department.hasOwnProperty(courses[i].dep_no)) {
        courses_Department[courses[i].dep_no].push(courses[i]);
      } else {
        courses_Department[courses[i].dep_no] = [];
        courses_Department[courses[i].dep_no].push(courses[i]);
      }
    }
    res.send({
      'nowCourse': nowCourse,
      'courses_Department': courses_Department,
    });
  });
});

router.get('/CourseByKeywords', function(req, res) {

  Course.findAll({
    attributes: ['id', 'course_name', 'dep_no', 'class_no', 'class', 'dep_name', 'teacher', 'time', 'comment_num'],
    order: [['id', 'DESC']]
  }).then(function(courses) {
    if(req.query.hasOwnProperty("queryw")) {
      var Query = req.query.queryw.replace(/\'|\#|\/\*/g, "").split(" ");
      Query = Query.map(function(query) {
        return {
          course_name: {
            [Op.like]: `%${query}%`
          }
        }
      });
      Course.findAll({
        attributes: ['id', 'course_name', 'dep_no', 'class_no', 'class', 'dep_name', 'teacher', 'time', 'comment_num'],
        where: {
          [Op.or]: Query
        }
      }).then(function(customCourses) {
        res.send(customCourses);
      });
    } else if(req.query.hasOwnProperty("teacher")) {
      Course.findAll({
        attributes: ['id', 'course_name', 'dep_no', 'class_no', 'class', 'dep_name', 'teacher', 'time', 'comment_num'],
        where: { 'teacher': req.query.teacher }
      }).then(function(customCourses) {
        res.send(customCourses);
      });
    } else if(req.query.hasOwnProperty("course_name")) {
      Course.findAll({
        attributes: ['id', 'course_name', 'dep_no', 'class_no', 'class', 'dep_name', 'teacher', 'time', 'comment_num'],
        where: { 'course_name': req.query.course_name }
      }).then(function(customCourses) {
        res.send(customCourses);
      });
    } else if(req.query.hasOwnProperty("catalog")) {
      Course.findAll({
        attributes: ['id', 'course_name', 'dep_no', 'class_no', 'class', 'dep_name', 'teacher', 'time', 'comment_num'],
        where: { 'dep_no': req.query.catalog }
      }).then(function(customCourses) {
        res.send(customCourses);
      });
    }
  });
});

/* add course */
router.post('/addcourse/:id', helper.apiAuth(), function(req, res) {
  Cart.findOrCreate({
    where: {
      user_id: req.user.id,
      course_id: req.params.id
    },
    defaults: {
      user_id: req.user.id,
      course_id: req.params.id
    }
  }).spread(function(cart, created) {
    if(created) {
      res.send('ok');
    } else {
      res.send('exist');
    }
  });
});

/* del course*/
router.post('/delcourse/:id', function(req, res) {
  Cart.destory({
    where: {
      course_id: req.params.id,
      user_id: req.user.id
    }
  }).then(function(result) {
    res.send('ok');
  }).catch(function(err) {
    res.send(err);
  });
});

/* input add course */
router.post('/inputaddcourse/:serial', function(req, res) {
  var serial = req.params.serial.toUpperCase();
  /* 透過輸入的選課序號 查找課程 */
  Course.findOne({
    attributes: ['id', 'course_name', 'time'],
    where: { 'serial': serial }
  }).then(function(course) {
    if(course) {
      if(req.user) {
        Cart.findOrCreate({
          where: {
            user_id: req.user.id,
            course_id: course.id
          },
          defaults: {
            user_id: req.user.id,
            course_id: course.id
          }
        }).spread(function(cart, created) {
          if(created) {
            res.send('ok');
          } else {
            res.send('exist');
          }
        });
      } else {
        res.send(course);
      }
    } else {
      res.send("notFound");
    }
  });
});

/* show */
router.get('/:id', function(req, res) {
  var id = req.params.id;
  if(id.match(/\D/g)) {
    res.redirect('/');
  } else {
    /* 尋找課程的資訊 */
    Course.findOne({
      where: { 'id': id }
    }).then(function(course) {
      Post.findOne({
        attributes: ['id', 'comment', 'course_style', 'course_need', 'exam_style', 'semester', 'score_style', 'report_hw'],
        where: { 'course_name': course.course_name, 'teacher': course.teacher }
      }).then(function(post) {
        course.comment = 0;
        course.course_style = 0;
        course.report_hw = 0;
        course.score_style = 0;

        for(var i in post) {
          for(var j in post[i]) {
            if(post[i][j] == "無" || post[i][j] == "") {
              delete post[i][j];
              continue;
            }
            course[j]++;
          }
        }
        Rate.findAll({
          where: { course_name: course.course_name, teacher: course.teacher }
        }).then(function(rates) {
          var sweet = 0;
          var hard = 0;
          var recommand = 0;
          if(rates.length > 0) {
            for(var i in rates) {
              sweet += rates[i].sweet;
              hard += rates[i].hard;
              recommand += rates[i].recommand;
            }
            sweet /= rates.length;
            hard /= rates.length;
            recommand /= rates.length;
          }
          if(req.user) {
            var hasRate = false;
            if(rates.length > 0) {
              for(var i in rates) {
                if(rates[i].user_id == req.user.id) {
                  hasRate = true;
                }
              }
            }
            /* 有登入 抓取用戶的選課清單 */
            Cart.findAll({
              attributes: ['id'],
              where: { 'user_id': req.user.id }
            }).then(function(cart) {
              res.render('course/show', {
                'recommand': recommand,
                'hard': hard,
                'sweet': sweet,
                'rate_count': rates.length,
                'course': course,
                'comment': comment,
                'hasRate': hasRate,
                'cart': cart
              });
            });
          } else {
            res.render('course/show', {
              'recommand': recommand,
              'hard': hard,
              'sweet': sweet,
              'rate_count': rates.length,
              'course': course,
              'comment': comment,
              'hasRate': false,
              'cart': []
            });
          }
        });
      });
    });
  }
});

function checkLogin(req, res, allCourses, customCourses) {
  if(req.user) {
    Cart.findAll({
      attributes: ['course_id'],
      where: { 'user_id': req.user.id }
    }).then(function(cart) {
      res.render('course/index', {
        'courses': allCourses,
        'customCourses': customCourses,
        'cart': carts
      });
    });
  } else {
    res.render('course/index', {
      'courses': allCourses,
      'customCourses': customCourses,
      'cart': []
    });
  }
}

module.exports = router;
