var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* root */
router.get('/', function(req, res) {

  // Log
  console.log("\n")
  console.log("========================================");
  var dt = new Date();
  console.log(dt);
  console.log("query: " + req.url);
  if(req.user !== undefined) console.log("使用者：" + req.user.name);

  /* 設定 Order 欄位 */
  if(req.query.order){
    var order = req.query.order;
  }
  else{
    var order = 'course_name';
  }
  /*  設定要的欄位 */
  var colmuns = ['id','course_name','catalog','teacher','semester','user_id'];
  db.GetColumn('post',colmuns,{'column':order,'order':'DESC'},function(posts){
    if(req.query.hasOwnProperty("queryw")){
	  	db.query_post(posts, req.query.queryw,"query",function(posts,teachers,course_name){
        if(req.query.order){
          res.send(posts);
        }
        else{
          res.render('post/index',{
            'posts':posts,
            'teachers': teachers,
            'course_name': course_name,
            'user': req.user
          });
        }
      });
	  }
	  else if(req.query.hasOwnProperty("teacher")){
	  	db.query_post(posts, req.query.teacher, "teacher",function(posts,teachers,course_name){
        if(req.query.order){
          res.send(posts);
        }
        else{
          res.render('post/index',{
            'posts':posts,
            'teachers': teachers,
            'course_name': course_name,
            'user': req.user
          });
        }
      });
	  }
	  else if(req.query.hasOwnProperty("course_name")){
	  	db.query_post(posts, req.query.course_name, "course_name",function(posts,teachers,course_name){
        if(req.query.order){
          res.send(posts);
        }
        else{
          res.render('post/index',{
            'posts':posts,
            'teachers': teachers,
            'course_name': course_name,
            'user': req.user
          });
        }
      });
	  }
	  else if(req.query.hasOwnProperty("catalog")){
	  	switch(req.query.catalog){
	  		case "A9":
	  			req.query.catalog = "通識";
	  			break;
	  		case "A2":
	  			req.query.catalog = "體育";
	  			break;
	  		case "A1":
	  			req.query.catalog = "外國語言";
	  			break;
	  		case "A6":
	  			req.query.catalog = "服務學習";
	  			break;
	  		case "A7":
	  			req.query.catalog = "基礎國文";
	  			break;
	  		case "AG":
	  			req.query.catalog = "公民歷史";
	  			break;
        case "M":
          req.query.catalog = "必修";
          break;
        case "C":
          req.query.catalog = "選修";
          break;
        default :
          req.query.catalog = "";
          break;
	  	}
	  	db.query_post(posts, req.query.catalog,"catalog",function(posts,teachers,course_name){
        if(req.query.order){
          res.send(posts);
        }
        else{
          res.render('post/index',{
            'posts':posts,
            'teachers': teachers,
            'course_name': course_name,
            'user': req.user
          });
        }
      });
	  }
	  else{
			var teacher = db.search_item(posts, "teacher");
		  var courseName = db.search_item(posts, "course_name");
      if(req.query.order){
        res.send(posts);
      }
      else{
  	    res.render('post/index',{
  	    	'posts':posts,
  	    	'teachers': teacher,
  	    	'course_name': courseName,
          'user': req.user
  	    });
      }
	  }
  });
});

module.exports = router;
