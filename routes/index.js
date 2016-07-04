var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* root */
router.get('/', function(req, res) {
  console.log("GET '/'");
  // db.getall('post',function(datas){
  //   res.render('post/index',{'data':datas});
  // });

  if(!req.query.hasOwnProperty("teacher") && !req.query.hasOwnProperty("course")){
	  db.getall('post',function(datas){
	  	var teacher = search_item(datas, "teacher");
	  	var courseName = search_item(datas, "course_name");
	  	// console.log(teacher);

	    res.render('post/index',{
	    	'data':datas,
	    	'teachers': teacher,
	    	'course_name': courseName,
	    });
	  });
  }
  else if(req.query.hasOwnProperty("teacher")){
	  db.getcols('post',function(datas){


	    res.render('post/index',{
	    	'data':datas,
	    });
	  });
  }

function search_item(datas, item){
  	var item_array = [];
  	var data = datas[0]
		item_array.push(data[item]);

		for(var i in datas){
			data = datas[i];
			for(var j in item_array){
				if(data[item] == null) continue;
				data[item] = data[item].replace(/\.|\(|\)/g, " ");
				if(item_array[j].match(data[item]) != null)
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
