var db = require("./db");
var Sequelize = require("sequelize");

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

module.exports = User;
