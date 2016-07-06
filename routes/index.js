var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* root */
router.get('/', function(req, res) {
  console.log("GET '/'");
  console.log(req.user);
  db.getall('post',function(datas){
	  if(req.query.hasOwnProperty("teacher")){
	  	db.query_post(datas, req.query.teacher, "teacher",function(data,teachers,course_name){
        res.render('post/index',{
          'data':data,
          'teachers': teachers,
          'course_name': course_name,
          'user': req.user
        });
      });
	  }
	  else if(req.query.hasOwnProperty("course_name")){
	  	db.query_post(datas, req.query.course_name, "course_name",function(data,teachers,course_name){
        res.render('post/index',{
          'data':data,
          'teachers': teachers,
          'course_name': course_name,
          'user': req.user
        });
      });
	  }
	  else if(req.query.hasOwnProperty("catalog")){
	  	switch(req.query.catalog){
	  		case "A9":
	  			req.query.catalog = "通識"
	  			break;
	  		case "A2":
	  			req.query.catalog = "體育"
	  			break;
	  		case "A1":
	  			req.query.catalog = "外國語言"
	  			break;
	  		case "A6":
	  			req.query.catalog = "服務學習"
	  			break;
	  		case "A7":
	  			req.query.catalog = "基礎國文"
	  			break;
	  		case "AG":
	  			req.query.catalog = "公民歷史"
	  			break;
        case "M":
          req.query.catalog = "必修"
          break;
        case "C":
          req.query.catalog = "選修"
          break;
        default :
          req.query.catalog = ""
          break;
	  	}
	  	db.query_post(datas, req.query.catalog, "catalog",function(data,teachers,course_name){
        res.render('post/index',{
          'data':data,
          'teachers': teachers,
          'course_name': course_name,
          'user': req.user
        });
      });
	  }
	  else{
			var teacher = db.search_item(datas, "teacher");
		  var courseName = db.search_item(datas, "course_name");

	    res.render('post/index',{
	    	'data':datas,
	    	'teachers': teacher,
	    	'course_name': courseName,
        'user': req.user
	    });
	  }
  });
});

router.get('/signup', function(req, res) {
  res.redirect('/user/signup');
});

router.get('/login', function(req, res) {
  res.redirect('/user/login');
});

module.exports = router;
