var db = require("./db");
var Sequelize = require("sequelize");

var courseSchema = {
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
  course_name: {
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
  credit: {
    type: Sequelize.INTEGER
  },
  teacher: {
    type: Sequelize.STRING
  },
  choose: {
    type: Sequelize.INTEGER
  },
  remaining: {
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
  industry: {
    type: Sequelize.STRING
  },
  attribute: {
    type: Sequelize.STRING
  },
  edu_program: {
    type: Sequelize.STRING
  },
  moocs: {
    type: Sequelize.STRING
  },
  update_at: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  comment_num: {
    type: Sequelize.INTEGER
  }
}

var Course = db.define('course', courseSchema, {
  timestamps: false,
  freezeTableName: true
});

module.exports = Course;
