var Sequelize = require("sequelize");
var config = require("../config.json");

var db = new Sequelize(config.db.database, config.db.user, config.db.password, {
  host: config.db.host,
  port: config.db.port,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  },
  query: { raw: true }
});

module.exports = db;
