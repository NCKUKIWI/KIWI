var db = require("./db");
var Sequelize = require("sequelize");
var User = require('./User');

var postSchema = {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	course_name: {
		type: Sequelize.STRING
	},
	teacher: {
		type: Sequelize.STRING
	},
  catalog: {
    type: Sequelize.STRING
  },
  semester: {
    type: Sequelize.STRING
  },
  score_style: {
    type: Sequelize.TEXT
  },
  course_style: {
    type: Sequelize.TEXT
  },
  course_need: {
    type: Sequelize.TEXT
  },
  exam_style: {
    type: Sequelize.TEXT
  },
  report_hw: {
    type: Sequelize.TEXT
  },
  comment: {
    type: Sequelize.TEXT
  },
  report_count: {
    type: Sequelize.STRING
  },
  user_id:{
    type: Sequelize.INTEGER,
    references:{
      model:User,
      key:'id'
    }
  },
	created_at: {
		type: 'TIMESTAMP',
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		allowNull: false
	}
}

var Post = db.define('post', postSchema,{
  timestamps: false
});

module.exports = Post;
