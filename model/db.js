var connection = require('../config');
connection = connection.connection;

/*
Insert data into table

Insert(table,data,callback);

Example:

var data = {
  'col1': 'value1',
  'col2': 'value2',
}

Insert('table_name',data,function(err,result){...});

Delete data by Id

DeleteById(table,id,callbak);

Example:

DeleteById('table_name','2',function(err){...});

Get all data from table order by column

GetAll(table,order,callback);

Example:

GetAll('table_name','columns_name',function(datas){...});

Get specific data from table order by column

GetCols(table,columns,order,callback);

Example:

var columns = ['columns_name1','columns_name2'];

GetCols('table_name',columns,'columns_name',function(datas){...});

Find one data by Id (just on data)

FindbyID(table,id,callback);

Example:

FindbyID('table_name','2',function(data){...});

Find one datas by Id (one or more datas)

FindbyColumn(table,conditions,callback);

Example:

var conditions ={
 id:2,
 name:'xxx'
}

FindbyColumn('user',conditions,function(datas){...});
*/

exports.Insert = function Insert(table,data,callback){
  var sql = "INSERT INTO " + table + " SET ? ";
  console.log(sql);
  console.log("Data: {");
  for(var i in data){
    console.log(i+" : "+data[i]);
  }
  console.log("}");
  connection.query(sql,data,function(err,result){
    if (err) throw err;
    console.log("Create Success!");
    callback(err,result);
  });
}


exports.DeleteById = function DeleteById(table,id,callback){
  var sql = "DELETE FROM " + table + " WHERE id = " + id;
  console.log(sql);
  connection.query(sql,function(err){
    if (err) throw err;
    console.log("DELETE Success!");
    callback(err);
  });
}

exports.GetAll = function GetAll(table,order,callback){
  var sql = "SELECT * FROM " + table + " ORDER BY " + order +" DESC" ;
  console.log(sql);
  connection.query(sql,function(err, results, fields){
    if (err) throw err;
    callback(results);
  });
}

exports.GetCols = function GetCols(table,cols,order,callback){
  var columns = "";
  for(var i in cols ){
    columns+=cols[i];
    if( i != cols.length-1 ){
      columns+=",";
    }
  }
  var sql = "SELECT " + columns + " FROM " + table + " ORDER BY " + order +" DESC" ;
  console.log(sql);
  connection.query(sql,function(err, results, fields){
    if (err) throw err;
    callback(results);
  });
}

exports.FindbyID = function FindbyID(table,id,callback){
  var sql = "SELECT * FROM " + table +" WHERE id = "+ id;
  console.log(sql);
  connection.query(sql,function(err, results, fields){
    if (err) throw err;
    callback(results[0]);
  });
}

exports.FindbyColumn = function FindbyColumn(table,conditions,callback){
  var condition="";
  var count = 0;
  var size = Object.keys(conditions).length - 1;
  for(var i in conditions){
    if(typeof conditions[i] === "number"){
      condition = condition + i + " = " + conditions[i];
    }
    else{
      condition = condition + i + " = \'" + conditions[i] + "\'";
    }
    if(count == size){
      break;
    }
    else{
      count++;
      condition = condition + " AND ";
    }
  }
  var sql = "SELECT * FROM " + table + " WHERE "+ condition;
  console.log(sql);
  connection.query(sql,function(err, results, fields){
    if (err) throw err;
    callback(results);
  });
}

exports.UpdatePlusone = function UpdatePlusone(table,col,id,callback){
  var sql = "UPDATE " + table + " SET " + col +" = " + col + "+1 WHERE id = "+ id;
  console.log(sql);
  connection.query(sql,function(err, results, fields){
    if (err) throw err;
    callback(results);
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

exports.search_item = search_item;

exports.query_post = function query_post(datas, req, item,callback){
	var teacher = search_item(datas, "teacher");
  var courseName = search_item(datas, "course_name");

  try {
    	var regex = req.replace(/\(/g, "\\(");
    	regex = regex.replace(/\)/g, "\\)");
    	regex = regex.replace(/\./g, "\\.");

      new RegExp(regex);
  } catch(e) {
      console.log(e);
      regex = "";
  }
  var query_data = [];
  if(item=="query"){
    for(var i in datas){
  		var data = datas[i]
  		if(data['teacher'].match(regex)){
  			query_data.push(datas[i]);
  		}
      if(data['course_name'].match(regex)){
        query_data.push(datas[i]);
      }
  	}
  }
  else{
  	for(var i in datas){
  		var data = datas[i]
  		if(data[item].match(regex)){
  			query_data.push(datas[i]);
  		}
  	}
  }

  callback(query_data,teacher,courseName);
}
