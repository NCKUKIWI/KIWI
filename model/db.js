var connection = require('./mysql.js');
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

=================
Delete data by Id

DeleteById(table,id,callbak);

Example:

DeleteById('table_name','2',function(err){...});

=================
Get all data from table order by column

GetAll(table,order,callback);

Example:

GetAll('table_name','columns_name',function(datas){...});

=================
Get specific data from table order by column

GetColumn(table,columns,order,callback);

Example:

var columns = ['columns_name1','columns_name2'];

GetColumn('table_name',columns,'columns_name',function(datas){...});

=================
Find one data by Id (just on data)

FindbyID(table,id,callback);

Example:

FindbyID('table_name','2',function(data){...});

=================
Find datas by column (one or more datas)

FindbyColumn(table,cols,conditions,callback);

Example:

var conditions ={
 id:2,
 name:'xxx'
};
var cols=["*"];
FindbyColumn('user',cols,conditions,function(datas){...});

=================
Find datas by conditions and order by column (one or more datas)

FindbyColumnOrder(table,conditions,order,callback);

Example:

var conditions ={
 user_id:2
};

FindbyColumnOrder('post',conditions,{'column':ordercolumn,'order':'ASC/DESC'},function(datas){...});

=================
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

=================
Inner Join table

InnerJoin(tables,cols,conditions,callback);

Example:

var tables = {'table':'post','jointable':'user'};
var cols = ['post.title','user.name'];
var conditions = {'user.id':post.user_id};
InnerJoin(tables,cols,conditions,function(results){...});
*/

function conditionjoin(conditions) {
    var condition = "";
    var count = 0;
    var size = Object.keys(conditions).length - 1;
    for (var i in conditions) {
        if (typeof conditions[i] === "number") {
            condition = condition + i + " = " + conditions[i];
        } else {
            if (conditions[i].indexOf(",") != -1) {
                condition = condition + i + " in( ";
                var query = conditions[i].split(",");
                for (var j in query) {
                    condition += "\'" + query[j] + "\'";
                    if (j != query.length - 1) condition += ',';
                }
                condition += " )";
            } else {
                condition = condition + i + " LIKE \'%" + conditions[i] + "%\'";
            }
        }
        if (count == size) {
            return condition;
        } else {
            count++;
            condition = condition + " AND ";
        }
    }
}

exports.Insert = function Insert(table, data, callback) {
    var sql = "INSERT INTO " + table + " SET ? ";
    console.log(sql);
    console.log("Data: {");
    for (var i in data) {
        console.log(i + " : " + data[i]);
    }
    console.log("}");
    connection.query(sql, data, function(err, results) {
        if (err) throw err;
        console.log("Create Success!");
        callback(err, results);
    });
}


exports.DeleteById = function DeleteById(table, id, callback) {
    var sql = "DELETE FROM " + table + " WHERE id = " + id;
    console.log(sql);
    connection.query(sql, function(err, results) {
        if (err) throw err;
        console.log("DELETE Success!");
        callback(err);
    });
}

exports.DeleteByColumn = function DeleteByColumn(table, conditions, callback) {
    var condition = conditionjoin(conditions);
    var sql = "DELETE FROM " + table + " WHERE " + condition;
    console.log(sql);
    connection.query(sql, function(err, results) {
        if (err) throw err;
        console.log("DELETE Success!");
        callback(err);
    });
}

exports.GetAll = function GetAll(table, order, callback) {
    var sql = "SELECT * FROM " + table + " ORDER BY " + order['column'] + " " + order['order'];
    console.log(sql);
    connection.query(sql, function(err, results, fields) {
        if (err) throw err;
        callback(results);
    });
}

exports.GetColumn = function GetColumn(table, cols, order, callback) {
    var columns = "";
    for (var i in cols) {
        columns += cols[i];
        if (i != cols.length - 1) {
            columns += ",";
        }
    }
    var sql = "SELECT " + columns + " FROM " + table + " ORDER BY " + order['column'] + " " + order['order'];
    console.log(sql);
    connection.query(sql, function(err, results, fields) {
        if (err) throw err;
        callback(results);
    });
}

exports.FindbyID = function FindbyID(table, id, callback) {
    var sql = "SELECT * FROM " + table + " WHERE id = " + id;
    console.log(sql);
    connection.query(sql, function(err, results, fields) {
        if (err) throw err;
        callback(results[0]);
    });
}

exports.FindbyColumn = function FindbyColumn(table, cols, conditions, callback) {
    var columns = "";
    for (var i in cols) {
        columns += cols[i];
        if (i != cols.length - 1) {
            columns += ",";
        }
    }
    var condition = conditionjoin(conditions);
    var sql = "SELECT " + columns + " FROM " + table + " WHERE " + condition;
    console.log(sql);
    connection.query(sql, function(err, results, fields) {
        if (err) throw err;
        callback(results);
    });
}

exports.FindbyColumnOrder = function FindbyColumnOrder(table, conditions, order, callback) {
    var condition = conditionjoin(conditions);
    var sql = "SELECT * FROM " + table + " WHERE " + condition + " ORDER BY " + order['column'] + " " + order['order'];
    console.log(sql);
    connection.query(sql, function(err, results, fields) {
        if (err) throw err;
        callback(results);
    });
}

exports.Update = function Update(table, datas, conditions, callback) {
    var condition = conditionjoin(conditions);
    var data = "";
    count = 0;
    size = Object.keys(datas).length - 1;
    for (var i in datas) {
        if (typeof datas[i] === "number") {
            data = data + i + " = " + datas[i];
        } else {
            data = data + i + " = \'" + datas[i] + "\'";
        }
        if (count == size) {
            break;
        } else {
            count++;
            data = data + ",";
        }
    }
    var sql = "UPDATE " + table + " SET " + data + " WHERE " + condition;
    console.log(sql);
    console.log("Data: {");
    for (var i in datas) {
        console.log(i + " : " + datas[i]);
    }
    console.log("}");
    connection.query(sql, function(err, results) {
        if (err) throw err;
        callback(results);
    });
}


exports.UpdatePlusone = function UpdatePlusone(table, col, id, callback) {
    var sql = "UPDATE " + table + " SET " + col + " = " + col + "+1 WHERE id = " + id;
    console.log(sql);
    connection.query(sql, function(err, results) {
        if (err) throw err;
        callback(results);
    });
}

exports.InnerJoin = function InnerJoin(tables, cols, conditions, callback) {
    var condition = "";
    var count = 0;
    var size = Object.keys(conditions).length - 1;
    for (var i in conditions) {
        condition = condition + i + " = " + conditions[i];
        if (count == size) {
            break;
        } else {
            count++;
            condition = condition + " AND ";
        }
    }
    var columns = "";
    for (var i in cols) {
        columns += cols[i];
        if (i != cols.length - 1) {
            columns += ",";
        }
    }
    var sql = "SELECT " + columns + " FROM " + tables['table'] + " INNER JOIN " + tables['jointable'] + " ON " + condition;
    console.log(sql);
    connection.query(sql, function(err, results) {
        if (err) throw err;
        callback(results);
    });
}


function search_item(datas, item) {
    var item_array = [];
    var data = datas[0]
    item_array.push(data[item]);

    for (var i in datas) {
        data = datas[i];
        for (var j in item_array) {
            if (data[item] == null) continue;
            var regex = data[item].replace(/\(/g, "\\(");
            regex = regex.replace(/\)/g, "\\)");
            regex = regex.replace(/\./g, "\\.");

            if (item_array[j].match(regex) != null)
                break;
            else if (j == item_array.length - 1) {
                item_array.push(data[item]);
            }
        }
    }
    return item_array;
}

exports.search_item = search_item;

exports.query_post = function query_post(datas, req, item, callback) {
    var teacher = search_item(datas, "teacher");
    var courseName = search_item(datas, "course_name");

    try {
        var regex = req.replace(/\(/g, "\\(");
        regex = regex.replace(/\)/g, "\\)");
        regex = regex.replace(/\./g, "\\.");

        new RegExp(regex);
    } catch (e) {
        console.log(e);
        regex = "";
    }
    var query_data = [];
    if (item == "query") {
        for (var i in datas) {
            var data = datas[i]
            if (data['teacher'].match(regex)) {
                query_data.push(datas[i]);
            }
            if (data['course_name'].match(regex)) {
                query_data.push(datas[i]);
            }
        }
    } else {
        for (var i in datas) {
            var data = datas[i]
            if (data[item].match(regex)) {
                query_data.push(datas[i]);
            }
        }
    }

    callback(query_data, teacher, courseName);
}


// =======================
// for course
// 這邊是指定course_new為搜尋的table，不知這樣做是否好，可能要再修
exports.query_post2 = function query_post2(id, callback) {

    var sql_1 = "SELECT * FROM course_new WHERE id = " + id;
    console.log(sql_1)
    connection.query(sql_1, function(err, courseInfo) {
        if (err) throw err;
        var query_teacher = "%" + courseInfo[0]["老師"].split(/\s|\*/g)[0] + "%"; // 為了某些課有很多個老師，但是不一定每次都是相同人馬，只好先找第一個老師，再加上%來判斷
        var sql_2 = "SELECT id,comment, course_style, course_need, exam_style, semester, score_style, report_hw ";
        sql_2 += "FROM post WHERE teacher like " + "\'" + query_teacher + "\' ";
        sql_2 += "AND course_name = " + "\'" + courseInfo[0]["課程名稱"] + "\'" + " ORDER BY semester DESC";
        console.log(sql_2);
        connection.query(sql_2, function(err, comment) {
            if (err) throw err;
            callback(courseInfo, comment);
        });

    });
}

exports.query_course = function query_course(datas, req, item, callback) {
    try {
        var regex = req.replace(/\(/g, "\\(");
        regex = regex.replace(/\)/g, "\\)");
        regex = regex.replace(/\./g, "\\.");

        new RegExp(regex);
    } catch (e) {
        console.log(e);
        regex = "";
    }
    var query_data = [];
    if (item == "query") {
        for (var i in datas) {
            var data = datas[i]
            if (data['teacher'].match(regex)) {
                query_data.push(datas[i]);
            }
            if (data['course_name'].match(regex)) {
                query_data.push(datas[i]);
            }
        }
    } else {
        for (var i in datas) {
            var data = datas[i]
            if (data[item].match(regex)) {
                query_data.push(datas[i]);
            }
        }
    }

    callback(query_data, teacher, courseName);
}

exports.FindbyColumnFuzzy = function FindbyColumn(table, cols, conditions, callback) {
    var columns = "";
    for (var i in cols) {
        columns += cols[i];
        if (i != cols.length - 1) {
            columns += ",";
        }
    }
    // var condition = conditionjoin(conditions);
    var whereCondition = "課程名稱 like ";
    for (var i in conditions) {
        whereCondition += "\'" + "%" + conditions[i] + "%" + "\'";
        whereCondition += " or 老師 like " + "\'" + "%" + conditions[i] + "%" + "\'";
        if (i != conditions.length - 1) whereCondition += " or 課程名稱 like ";
    }
    var sql = "SELECT " + columns + " FROM " + table + " WHERE " + whereCondition;
    console.log(sql);
    connection.query(sql, function(err, results, fields) {
        if (err) throw err;
        callback(results);
    });
}

exports.Query = function Query(sql, callback) {
    console.log(sql);
    connection.query(sql, function(err, results, fields) {
        if (err) throw err;
        callback(results);
    });
}