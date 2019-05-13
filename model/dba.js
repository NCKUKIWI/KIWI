/*
SELECT 1
INSERT 2
DELETE 3
UPDATE 4
*/

var chalk = require('chalk');
var connection = require('../model/mysql');
connection = connection.connection;

var start;
var end;
var db = function () {
  this.sql = "";
  this.sqlType = 0;
  this.limitAmt = "";
  /* SLECTE */
  this.tableName = "";
  this.fieldList = [];
  this.condition = [];
  this.orderby = [];
  /* INSERT */
  this.datakey = [];
  this.datavalue = [];
  /* Join */
  this.joinTable = "";
}

db.prototype.init = function () {
  this.sql = "";
  this.sqlType = 0;
  this.limitAmt = "";
  /* SLECTE */
  this.tableName = "";
  this.fieldList = [];
  this.condition = [];
  this.orderby = [];
  /* INSERT */
  this.datakey = [];
  this.datavalue = [];
  /* Join */
  this.joinTable = "";
};

/* SELECT */
db.prototype.select = function () {
  start = new Date().getTime();
  this.sql += "SELECT ";
  this.sqlType = 1;
  return this;
};

db.prototype.from = function (table) {
  if (this.sqlType != 1 && this.sqlType != 3) {
    throw chalk.red("Error: from() Must follow with select() or delete()");
  } else {
    this.tableName = table;
    return this;
  }
};

db.prototype.field = function (field) {
  if (this.sqlType != 1) {
    throw chalk.red("Error: field() Must follow with select()");
  } else {
    if (typeof field == "object") {
      for (var i in field) {
        this.fieldList.push(field[i]);
      }
    } else {
      this.fieldList.push(field);
    }
    return this;
  }
};

db.prototype.where = function (condition, value) {
  if (condition == '') {
    return this;
  } else {
    if (typeof value === "undefined") {
      this.condition.push(condition);
    } else {
      if (typeof value == "string") {
        this.condition.push(condition + "'" + value + "'");
      } else if (typeof value == "object") {
        var _in = " (";
        for (var i in value) {
          if (typeof value[i] == "string") {
            _in += "'" + value[i] + "'";
          } else {
            _in += value[i];
          }
          if (i != value.length - 1) {
            _in += ",";
          }
        }
        _in += ")";
        this.condition.push(condition + _in);
      } else {
        this.condition.push(condition + value);
      }
    }
    return this;
  }
};

db.prototype.whereCheck = function (condition, value) {
  if (value !== null) {
    this.condition.push(condition);
  }
  return this;
};

db.prototype.SelectQueryBuilder = function () {
  for (var i in this.fieldList) {
    if (i == this.fieldList.length - 1) {
      this.sql += this.fieldList[i] + " ";
    } else {
      this.sql += (this.fieldList[i] + ",");
    }
  }

  this.sql += "FROM " + this.tableName;
  if (this.condition.length > 0) {
    this.ConditionBuilder();
  }

  if (this.orderby.length != 0) {
    this.sql += " ORDER BY ";
    for (var i in this.orderby) {
      if (i == this.orderby.length - 1) {
        this.sql += this.orderby[i] + " ";
      } else {
        this.sql += this.orderby[i] + " , ";
      }
    }
  }
  if (this.limitAmt != "") {
    this.sql += this.limitAmt;
  }
}

/* INSERT */
db.prototype.insert = function () {
  start = new Date().getTime();
  this.sql += "INSERT ";
  this.sqlType = 2;
  return this;
};

db.prototype.into = function (table) {
  if (this.sqlType != 2) {
    throw chalk.red("Error: into() Must follow with insert()");
  } else {
    this.sql += "INTO " + table;
    return this;
  }
};

db.prototype.set = function (data) {
  if (this.sqlType != 2 && this.sqlType != 4) {
    throw chalk.red("Error: set() Must follow with insert() or update()");
  } else {
    for (var i in data) {
      this.datakey.push(i);
      if (typeof data[i] === "string") {
        this.datavalue.push("'" + data[i] + "'");
      } else {
        this.datavalue.push(data[i]);
      }
    }
    return this;
  }
};

db.prototype.InsertQueryBuilder = function () {
  this.sql += " (";
  for (var i in this.datakey) {
    if (i == this.datakey.length - 1) {
      this.sql += this.datakey[i];
    } else {
      this.sql += this.datakey[i] + ",";
    }
  }
  this.sql += ") VALUE (";
  for (var i in this.datavalue) {
    if (i == this.datavalue.length - 1) {
      this.sql += this.datavalue[i];
    } else {
      this.sql += this.datavalue[i] + ",";
    }
  }
  this.sql += ") ";
};

/* DELETE */
db.prototype.delete = function () {
  start = new Date().getTime();
  this.sql += "DELETE ";
  this.sqlType = 3;
  return this;
};

db.prototype.DeleteQueryBuilder = function () {

  this.sql += "FROM " + this.tableName;
  if (this.condition.length > 0) {
    this.ConditionBuilder();
  }
  if (this.orderby.length != 0) {
    this.sql += " ORDER BY ";
    for (var i in this.orderby) {
      if (i == this.orderby.length - 1) {
        this.sql += this.orderby[i] + " ";
      } else {
        this.sql += this.orderby[i] + " , ";
      }
    }
  }
  if (this.limitAmt != "") {
    this.sql += this.limitAmt;
  }
};

/* UPDATE */
db.prototype.update = function () {
  this.sql += "UPDATE ";
  this.sqlType = 4;
  return this;
}

db.prototype.table = function (table) {
  if (this.sqlType != 4) {
    throw chalk.red("Error: table() Must follow with update()");
  } else {
    this.tableName = table;
    return this;
  }
};

db.prototype.UpdateQueryBuilder = function () {
  this.sql += this.tableName + " ";
  this.sql += "SET ";
  for (var i in this.datakey) {
    if (i == this.datakey.length - 1) {
      this.sql += (this.datakey[i] + "=" + this.datavalue[i]);
    } else {
      this.sql += (this.datakey[i] + "=" + this.datavalue[i] + ",");
    }
  }
  if (this.condition.length > 0) {
    this.ConditionBuilder();
  }
}
/* innerjoin */
db.prototype.join = function (table) {
  this.joinTable = table;
  return this;
};

db.prototype.JoinQueryBuilder = function () {

  for (var i in this.fieldList) {
    if (i == this.fieldList.length - 1) {
      this.sql += this.fieldList[i] + " ";
    } else {
      this.sql += (this.fieldList[i] + ",");
    }
  }
  this.sql += "FROM " + this.tableName + " INNER JOIN " + this.joinTable;

  if (this.condition.length > 0) {
    this.ConditionBuilder();
  }
  if (this.orderby.length != 0) {
    this.sql += " ORDER BY ";
    for (var i in this.orderby) {
      if (i == this.orderby.length - 1) {
        this.sql += this.orderby[i] + " ";
      } else {
        this.sql += this.orderby[i] + " , ";
      }
    }
  }
  if (this.limitAmt != "") {
    this.sql += this.limitAmt;
  }
};

db.prototype.order = function (order, type) {
  if (type === undefined) {
    type = "ASC";
  } else {
    type = "DESC";
  }
  this.orderby.push(order + " " + type);
  return this;
}

db.prototype.limit = function (number) {
  this.limitAmt += "LIMIT " + number;
  return this;
};

db.prototype.ConditionBuilder = function () {

  if (this.joinTable != "") {
    this.sql += " ON ";
  } else {
    this.sql += " WHERE ";
  }
  for (var i in this.condition) {
    if (i == this.condition.length - 1) {
      this.sql += this.condition[i];
    } else {
      this.sql += this.condition[i] + " AND ";
    }
  }
};

db.prototype.run = function (callback, silence) {
  switch (this.sqlType) {
    case 1:
      if (this.joinTable != "") {
        this.JoinQueryBuilder();
      } else {
        this.SelectQueryBuilder();
      }
      break;
    case 2:
      this.InsertQueryBuilder();
      break;
    case 3:
      this.DeleteQueryBuilder();
      break;
    case 4:
      this.UpdateQueryBuilder();
      break;
    default:
      throw "Error";
  }
  if (!silence) console.log("\n" + this.sql);
  var sql = this.sql;
  this.init();
  connection.query(sql, function (err, results, fields) {
    end = new Date().getTime();
    var time = end - start;
    if (!silence) console.log(chalk.green("Execute time: " + time + " ms"));
    callback(results, err);
  });
};

db.prototype.get = function (callback) {
  switch (this.sqlType) {
    case 1:
      if (this.joinTable != "") {
        this.JoinQueryBuilder();
      } else {
        this.SelectQueryBuilder();
      }
      break;
    case 2:
      this.InsertQueryBuilder();
      break;
    case 3:
      this.DeleteQueryBuilder();
      break;
    case 4:
      this.UpdateQueryBuilder();
      break;
    default:
      console.log("Error");
      break;
  }
  console.log("\n" + this.sql);
  var sql = this.sql;
  this.init();
  connection.query(sql, function (err, results, fields) {
    if (err) throw err;
    end = new Date().getTime();
    var time = end - start;
    console.log(chalk.green("Execute time: " + time + " ms"));
    return results;
  });
};

db.prototype.test = function () {
  switch (this.sqlType) {
    case 1:
      if (this.joinTable != "") {
        this.JoinQueryBuilder();
      } else {
        this.SelectQueryBuilder();
      }
      break;
    case 2:
      this.InsertQueryBuilder();
      break;
    case 3:
      this.DeleteQueryBuilder();
      break;
    case 4:
      this.UpdateQueryBuilder();
      break;
    default:
      console.log("Error");
      break;
  }
  console.log("\n" + this.sql);
  var sql = this.sql;
  end = new Date().getTime();
  var time = end - start;
  console.log(chalk.green("Execute time: " + time + " ms"));
  this.init();
};

db.prototype.sql = function (sql, callback) {
  connection.query(sql, function (err, results, fields) {
    if (err) throw err;
    callback(results);
  });
};

module.exports = db;