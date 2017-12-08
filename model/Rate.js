var db = require("./db");
var Sequelize = require("sequelize");
var User = require('./User');
var Post = require('./Post');

var rateSchema = {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	hard: {
		type: Sequelize.INTEGER
	},
	sweet: {
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
  }
}

var Rate = db.define('rate', rateSchema,{
  timestamps: false,
	freezeTableName: true
});

module.exports = Rate;
