var db = require("./db");
var Sequelize = require("sequelize");
var User = require('./User');
var Course = require('./Course');

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
      model:Course,
      key:'id'
    }
	}
}

var Cart = db.define('cart', cartSchema,{
  timestamps: false,
	freezeTableName: true
});

Cart.belongsTo(Course, {foreignKey: 'course_id'});

module.exports = Cart;
