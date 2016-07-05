var pg = require('pg');
var config = require('../config');

/*
--conect db--
pg.connect(process.env.DATABASE_URL, function(err, client, done) {

});
*/

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

exports.getall = function getall(table,callback){
  var sql = "SELECT * FROM " + table ;
  console.log(sql);
  pg.connect(config.dburl, function(err, client, done) {
    if (err) throw err;
    client.query(sql, function (err, result) {
      if (err) throw err;
      client.end();
      console.log(result.rowCount+" datas");
      callback(result.rows);
    });
  });
}

exports.getcols = function getcols(table,cols,callback){
  var sql = "SELECT " + cols + " FROM " + table ;
  console.log(sql);
  pg.connect(config.dburl, function(err, client, done) {
    if (err) throw err;
    client.query(sql, function (err, result) {
      if (err) throw err;
      client.end();
      console.log(result.rowCount+" datas");
      callback(result.rows);
    });
  });
}

exports.findbyID = function findbyID(table,id,callback){
  var sql = "SELECT * FROM " + table +" WHERE id = "+ id;
  console.log(sql);
  pg.connect(config.dburl, function(err, client, done) {
    if (err) throw err;
    client.query(sql, function (err, result) {
      if (err) throw err;
      client.end();
      console.log(result.rowCount+" datas");
      callback(result.rows);
    });
  });
}

exports.findbyCourseName = function findbyCourseName(table,courseName,callback){
  var sql = "SELECT * FROM " + table +" WHERE course_name = "+ "\'" + courseName + "\'";
  console.log(sql);
  pg.connect(config.dburl, function(err, client, done) {
    if (err) throw err;
    client.query(sql, function (err, result) {
      if (err) throw err;
      client.end();
      console.log(result.rowCount+" datas");
      callback(result.rows);
    });
  });
}

exports.findbyTeacher = function findbyTeacher(table,name,callback){
  var sql = "SELECT * FROM " + table +" WHERE teacher = "+ "\'" + name + "\'";
  console.log(sql);
  pg.connect(config.dburl, function(err, client, done) {
    if (err) throw err;
    client.query(sql, function (err, result) {
      if (err) throw err;
      client.end();
      console.log(result.rowCount+" datas");
      callback(result.rows);
    });
  });
}

exports.query_post = function query_post(datas, req, item,callback){
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

  callback(query_data,teacher,courseName);
}


exports.search_item = function search_item(datas, item){
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
