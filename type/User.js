var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

var Post = require('../model/Post');
var postType = require('./Post');

var userType = new GraphQLObjectType({
  name: "User",
  description: "User",
  fields: {
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString
    },
    fb_id: {
      type: GraphQLString
    },
    role: {
      type: GraphQLInt
    },
    department: {
      type: GraphQLString
    },
    grade: {
      type: GraphQLString
    },
    created_at: {
      type: GraphQLString
    },
    posts: {
      type: new GraphQLList(postType),
      resolve(user) {
        return Post.findAll({ where: { user_id:user.id } }).then(function(result) {
          return result;
        });
      }
    }
  }
});

module.exports = userType;
