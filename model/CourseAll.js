var db = require("./db");
var Sequelize = require("sequelize");

var courseAllSchema = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  dep_name: {
    type: Sequelize.STRING
  },
  dep_no: {
    type: Sequelize.STRING
  },
  serial: {
    type: Sequelize.STRING
  },
  course_no: {
    type: Sequelize.STRING
  },
  class_no: {
    type: Sequelize.STRING
  },
  class: {
    type: Sequelize.STRING
  },
  grade: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  english: {
    type: Sequelize.STRING
  },
  course_name: {
    type: Sequelize.STRING
  },
  required: {
    type: Sequelize.STRING
  },
  teacher: {
    type: Sequelize.STRING
  },
  remaining: {
    type: Sequelize.INTEGER
  },
  credit: {
    type: Sequelize.INTEGER
  },
  time: {
    type: Sequelize.STRING
  },
  classroom: {
    type: Sequelize.STRING
  },
  note: {
    type: Sequelize.STRING
  },
  limit: {
    type: Sequelize.STRING
  },
  attribute: {
    type: Sequelize.STRING
  },
  edu_program: {
    type: Sequelize.STRING
  },
  update_at: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  semester: {
    type: Sequelize.STRING
  }
}

var CourseAll = db.define('course_all', courseAllSchema, {
  timestamps: false,
  freezeTableName: true
});

module.exports = CourseAll;
