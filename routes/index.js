var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* root */
router.get('/', function(req, res) {
  console.log("GET '/'");
  db.getall('post',function(datas){
  	var teacher = search_item(datas, "teacher");
	  var courseName = search_item(datas, "course_name");

	  if(!req.query.hasOwnProperty("teacher") && !req.query.hasOwnProperty("course")){
	    res.render('post/index',{
	    	'data':datas,
	    	'teachers': teacher,
	    	'course_name': courseName
	    });
	  }
	  else if(req.query.hasOwnProperty("teacher")){
	  	var query_data = [];
	  	for(var i in datas){
	  		if(datas[i].teacher.match(req.query.teacher)){
	  			query_data.push(datas[i]);
	  		}
	  	}
	    res.render('post/index',{
	    	'data':query_data,
	    	'teachers': teacher,
	    	'course_name': courseName
	    });

		  // db.findbyTeacher('post', req.query.teacher,function(datas){

		  //   res.render('post/index',{
		  //   	'data':datas,
		  //   	'teachers': teacher,
		  //   	'course_name': courseName
		  //   });
		  // });
	  }
	  else if(req.query.hasOwnProperty("course")){
			var regex = req.query.course.replace(/\(/g, "\\(");
			regex = regex.replace(/\)/g, "\\)");
			regex = regex.replace(/\./g, "\\.");

	  	var query_data = [];
	  	for(var i in datas){
	  		if(datas[i].course_name.match(regex)){
	  			query_data.push(datas[i]);
	  		}
	  	}
	    res.render('post/index',{
	    	'data':query_data,
	    	'teachers': teacher,
	    	'course_name': courseName
	    });


		  // db.findbyCourseName('post', req.query.course,function(datas){

		  //   res.render('post/index',{
		  //   	'data':datas,
		  //   	'teachers': teacher,
		  //   	'course_name': courseName
		  //   });
		  // });
	  }
  });




function search_item(datas, item){
  	var item_array = [];
  	var data = datas[0]
		item_array.push(data[item]);

		for(var i in datas){
			data = datas[i];
			for(var j in item_array){
				if(data[item] == null) continue;
				var regex = data[item].replace(/\(/g, "\\(");
				regex = regex.replace(/\)/g, "\\)");
				regex = regex.replace(/\./g, "\\.");

				if(item_array[j].match(regex) != null)
					break;
				else if (j == item_array.length - 1){
					item_array.push(data[item]);
				}
			}
		}
		return item_array;
}



});

module.exports = router;
