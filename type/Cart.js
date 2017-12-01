var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

var Cart = require('../model/Cart');
var Course = require('../model/Course');
var courseType = require('./Course');

var cartType = new GraphQLObjectType({
  name: "Cart",
  description: "The courses that choosen for put into schedule",
  fields: {
    id: {
      type: GraphQLInt
    },
    user_id: {
      type: GraphQLInt
    },
    course_id: {
      type: GraphQLInt
    },
    course: {
      type: courseType,
      resolve(cart) {
        return Course.findById(cart.course_id).then(function(result) {
          return result;
        });
      }
    }
  }
});

module.exports = cartType;
