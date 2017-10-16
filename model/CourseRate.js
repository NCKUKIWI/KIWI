var db = require("./db");
var Sequelize = require("sequelize");
var User = require('./User');
var Post = require('./Post');

var courseRateSchema = {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	hard: {
		type: Sequelize.INTEGER
	},
	recommand: {
		type: Sequelize.INTEGER
	},
  give: {
    type: Sequelize.INTEGER
  },
  got: {
    type: Sequelize.INTEGER
  },
  course_name: {
    type: Sequelize.STRING
  },
  teacher: {
    type: Sequelize.STRING
  },
  user_id: {
    type: Sequelize.INTEGER,
		references:{
			model:User,
			key:'id'
		}
  },
  post_id: {
    type: Sequelize.INTEGER,
		references:{
			model:Post,
			key:'id'
		}
  },
	created_at: {
		type: 'TIMESTAMP',
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		allowNull: false
	}
}

var CourseRate = db.define('course_rate', courseRateSchema,{
  timestamps: false
});

module.exports = CourseRate;
