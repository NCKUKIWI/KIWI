var connection = require('../config');
connection = connection.connection;

/*
Insert data into table

Insert(table,data,callback);

Example:

var data = {
  'col1': 'value1',
  'col2': 'value2',
};

Insert('table_name',data,function(err,results){...});

Delete data by Id

DeleteById(table,id,callbak);

Example:

DeleteById('table_name','2',function(err){...});

Get all data from table order by column

GetAll(table,order,callback);

Example:

GetAll('table_name','columns_name',function(datas){...});

Get specific data from table order by column

GetColumn(table,columns,order,callback);

Example:

var columns = ['columns_name1','columns_name2'];

GetColumn('table_name',columns,'columns_name',function(datas){...});

Find one data by Id (just on data)

FindbyID(table,id,callback);

Example:

FindbyID('table_name','2',function(data){...});

Find datas by column (one or more datas)

FindbyColumn(table,conditions,callback);

Example:

var conditions ={
 id:2,
 name:'xxx'
};

FindbyColumn('user',conditions,function(datas){...});

Find datas by conditions and order by column (one or more datas)

FindbyColumnOrder(table,conditions,order,callback);

Example:

var conditions ={
 user_id:2
};

FindbyColumnOrder('post',conditions,{'column':ordercolumn,'order':'ASC/DESC'},function(datas){...});

Update data

Update(table,datas,conditions,callback);

Example:

var datas ={
  name:'newname',
  nickname:'newnickname'
};
var conditions ={
  id:3
};

Update('user',datas,conditions,function(results){...});

Inner Join table

InnerJoin(tables,cols,conditions,callback);

Example:

var tables = {'table':'post','jointable':'user'};
var cols = ['post.title','user.name'];
var conditions = {'user.id':post.user_id};
InnerJoin(tables,cols,conditions,function(results){...});
*/

function conditionjoin(conditions){
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
      return condition;
    }
    else{
      count++;
      condition = condition + " AND ";
    }
  }
}

exports.Insert = function Insert(table,data,callback){
  var sql = "INSERT INTO " + table + " SET ? ";
  console.log(sql);
  console.log("Data: {");
  for(var i in data){
    console.log(i+" : "+data[i]);
  }
  console.log("}");
  connection.query(sql,data,function(err,results){
    if (err) throw err;
    console.log("Create Success!");
    callback(err,results);
  });
}


exports.DeleteById = function DeleteById(table,id,callback){
  var sql = "DELETE FROM " + table + " WHERE id = " + id;
  console.log(sql);
  connection.query(sql,function(err,results){
    if (err) throw err;
    console.log("DELETE Success!");
    callback(err);
  });
}

exports.DeleteByColumn = function DeleteByColumn(table,conditions,callback){
  var condition = conditionjoin(conditions);
  var sql = "DELETE FROM " + table + " WHERE " + condition;
  console.log(sql);
  connection.query(sql,function(err,results){
    if (err) throw err;
    console.log("DELETE Success!");
    callback(err);
  });
}

exports.GetAll = function GetAll(table,order,callback){
  var sql = "SELECT * FROM " + table + " ORDER BY " + order['column'] + " " + order['order'] ;
  console.log(sql);
  connection.query(sql,function(err, results, fields){
    if (err) throw err;
    callback(results);
  });
}

exports.GetColumn = function GetColumn(table,cols,order,callback){
  var columns = "";
  for(var i in cols ){
    columns+=cols[i];
    if( i != cols.length-1 ){
      columns+=",";
    }
  }
  var sql = "SELECT " + columns + " FROM " + table + " ORDER BY " + order['column'] + " " + order['order'];
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
  var condition = conditionjoin(conditions);
  var sql = "SELECT * FROM " + table + " WHERE " + condition;
  console.log(sql);
  connection.query(sql,function(err, results, fields){
    if (err) throw err;
    callback(results);
  });
}

exports.FindbyColumnOrder = function FindbyColumnOrder(table,conditions,order,callback){
  var condition = conditionjoin(conditions);
  var sql = "SELECT * FROM " + table + " WHERE " + condition + " ORDER BY " + order['column'] + " " + order['order'];
  console.log(sql);
  connection.query(sql,function(err, results, fields){
    if (err) throw err;
    callback(results);
  });
}

exports.Update = function Update(table,datas,conditions,callback){
  var condition = conditionjoin(conditions);
  var data="";
  count = 0;
  size = Object.keys(datas).length - 1;
  for(var i in datas){
    if(typeof datas[i] === "number"){
      data = data + i + " = " + datas[i];
    }
    else{
      data = data + i + " = \'" + datas[i] + "\'";
    }
    if(count == size){
      break;
    }
    else{
      count++;
      data = data + ",";
    }
  }
  var sql = "UPDATE " + table + " SET " + data + " WHERE " + condition;
  console.log(sql);
  console.log("Data: {");
  for(var i in datas){
    console.log(i+" : "+datas[i]);
  }
  console.log("}");
  connection.query(sql,function(err,results){
    if (err) throw err;
    callback(results);
  });
}


exports.UpdatePlusone = function UpdatePlusone(table,col,id,callback){
  var sql = "UPDATE " + table + " SET " + col +" = " + col + "+1 WHERE id = "+ id;
  console.log(sql);
  connection.query(sql,function(err, results){
    if (err) throw err;
    callback(results);
  });
}

exports.InnerJoin = function InnerJoin(tables,cols,conditions,callback){
  var condition = conditionjoin(conditions);
  var columns = "";
  for(var i in col ){
    columns+=col[i];
    if( i != col.length-1 ){
      columns+=",";
    }
  }
  var sql = "SELCTE " + columns + " FROM " + table['table'] + " INNER JOIN " + table['jointable'] + " ON " + condition;
  console.log(sql);
  connection.query(sql,function(err, results){
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
