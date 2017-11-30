var db = require("./db");
var Sequelize = require("sequelize");
var Course = require('./Course');

var followSchema = {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	course_id: {
		type: Sequelize.INTEGER,
    references:{
      model:Course,
      key:'id'
    }
	},
	fb_id: {
		type: Sequelize.INTEGER
	},
  content: {
    type: Sequelize.STRING
  },
  time: {
    type: Sequelize.STRING
  },
  serial: {
    type: Sequelize.STRING
  },
  teacher: {
    type: Sequelize.STRING
  },
  hadNotify: {
    type: Sequelize.INTEGER
  },
	created_at: {
		type: 'TIMESTAMP',
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		allowNull: false
	}
}

var FollowCopy = db.define('follow_copy', followSchema,{
  timestamps: false,
	freezeTableName: true
});

module.exports = FollowCopy;
