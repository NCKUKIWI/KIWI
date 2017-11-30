var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

var User = require('../model/User');
var userType = require('../type/User');

var userSchema = {
  type: new GraphQLList(userType),
  description: "All the users",
  args: {
    id: {
      type: GraphQLInt,
      description: "user id"
    }
  },
  resolve(root, params, ctx) {
    if(params.id) {
      return User.findOne({ where: { id: params.id } }).then(function(result) {
        return [result];
      });
    } else {
      return User.findAll().then(function(result) {
        return result;
      });
    }
  }
}

module.exports = userSchema;
