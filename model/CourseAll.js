var db = require("./db");
var Sequelize = require("sequelize");

var courseAllSchema = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  '系所名稱': {
    type: Sequelize.STRING
  },
  '系號': {
    type: Sequelize.STRING
  },
  '選課序號': {
    type: Sequelize.STRING
  },
  '課程碼': {
    type: Sequelize.STRING
  },
  '分班碼': {
    type: Sequelize.STRING
  },
  '班別': {
    type: Sequelize.STRING
  },
  '年級': {
    type: Sequelize.STRING
  },
  '類別': {
    type: Sequelize.STRING
  },
  '英語授課': {
    type: Sequelize.STRING
  },
  '課程名稱': {
    type: Sequelize.STRING
  },
  '選必修': {
    type: Sequelize.STRING
  },
  '老師': {
    type: Sequelize.STRING
  },
  '餘額': {
    type: Sequelize.INTEGER
  },
  '學分': {
    type: Sequelize.INTEGER
  },
  '時間': {
    type: Sequelize.STRING
  },
  '教室': {
    type: Sequelize.STRING
  },
  '備註': {
    type: Sequelize.STRING
  },
  '限選條件': {
    type: Sequelize.STRING
  },
  '屬性碼': {
    type: Sequelize.STRING
  },
  '跨領域學分學程': {
    type: Sequelize.STRING
  },
  'updateTime': {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  'semester': {
    type: Sequelize.STRING
  }
}

var CourseAll = db.define('course_all', courseAllSchema, {
  timestamps: false
});

module.exports = CourseAll;
