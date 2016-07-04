var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* root */
router.get('/', function(req, res) {
  console.log("GET '/'");
  db.getall('post',function(datas){

	  if(req.query.hasOwnProperty("teacher")){
	  	query_post(datas, req.query.teacher, "teacher");
	  }
	  else if(req.query.hasOwnProperty("course_name")){
	  	query_post(datas, req.query.course_name, "course_name");
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
	  	}
	  	query_post(datas, req.query.catalog, "catalog");
	  }
	  else{
			var teacher = search_item(datas, "teacher");
		  var courseName = search_item(datas, "course_name");

	    res.render('post/index',{
	    	'data':datas,
	    	'teachers': teacher,
	    	'course_name': courseName
	    });
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

function query_post(datas, req, item){
	var teacher = search_item(datas, "teacher");
  var courseName = search_item(datas, "course_name");

	var regex = req.replace(/\(/g, "\\(");
	regex = regex.replace(/\)/g, "\\)");
	regex = regex.replace(/\./g, "\\.");

	var query_data = [];
	for(var i in datas){
		var data = datas[i]
		if(data[item].match(regex)){
			query_data.push(datas[i]);
		}
	}

  res.render('post/index',{
  	'data':query_data,
  	'teachers': teacher,
  	'course_name': courseName
  });
}



});

module.exports = router;
