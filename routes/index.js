var express = require('express');
var router = express.Router();
var db = require('../model/db');

/* root */
router.get('/', function(req, res) {
  console.log("GET '/'");
  // if(!req.query.hasOwnProperty("teacher") && !req.query.hasOwnProperty("course")){
	  db.getall('post',function(datas){
	  	// var teacher = search_item(datas, "teacher");
	  	// var className = search_item(datas, "class_name");


	    res.render('post/index',{
	    	'data':datas,
	    	// 'teacher': teacher,
	    	// 'class_name': className,
	    });
	  });
  // }

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
}



});

module.exports = router;
