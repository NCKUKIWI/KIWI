var db = require("./db");
var Sequelize = require("sequelize");
var User = require('./User');
var Post = require('./Post');

var reportPostSchema = {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
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
  reason: {
    type: Sequelize.STRING
  },
	created_at: {
		type: 'TIMESTAMP',
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		allowNull: false
	}
}

var ReportPost = db.define('report_post', reportPostSchema,{
  timestamps: false
});

module.exports = ReportPost;
