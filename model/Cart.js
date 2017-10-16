var db = require("./db");
var Sequelize = require("sequelize");
var User = require('./User');
var CourseNew = require('./CourseNew');

var cartSchema = {
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
	course_id: {
    type: Sequelize.INTEGER,
    references:{
      model:CourseNew,
      key:'id'
    }
	},
	created_at: {
		type: 'TIMESTAMP',
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		allowNull: false
	}
}

var Cart = db.define('cart', cartSchema,{
  timestamps: false
});

module.exports = Cart;
