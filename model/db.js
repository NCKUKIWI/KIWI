var pg = require('pg');
var config = require('../config');

/*
--conect db--
pg.connect(process.env.DATABASE_URL, function(err, client, done) {

});
*/

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
