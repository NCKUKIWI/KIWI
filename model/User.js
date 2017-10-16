var db = require("./db");
var Sequelize = require("sequelize");
var Post = require('./Post');
var ReportPost = require('./ReportPost');
var CourseRate = require('./CourseRate');

var userSchema = {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: Sequelize.STRING
	},
	fb_id: {
		type: Sequelize.STRING
	},
  role: {
    type: Sequelize.INTEGER
  },
  department: {
    type: Sequelize.STRING
  },
  grade: {
    type: Sequelize.STRING
  },
	created_at: {
		type: 'TIMESTAMP',
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		allowNull: false
	}
}

var User = db.define('user', userSchema,{
  timestamps: false
});

User.hasMany(Post,{onDelete:"CASCADE",foreignKey:"user_id"});
User.hasMany(ReportPost,{onDelete:"CASCADE",foreignKey:"user_id"});
User.hasMany(CourseRate,{onDelete:"CASCADE",foreignKey:"user_id"});

module.exports = User;
