var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

var Post = require('../model/Post');
var postType = require('../type/Post');

var postSchema = {
  type: new GraphQLList(postType),
  description: "All the posts",
  args: {
    id: {
      type: GraphQLInt,
      description: "post id"
    }
  },
  resolve(root, params, ctx) {
    if(params.id) {
      return Post.findOne({ where: { id: params.id } }).then(function(result) {
        return [result];
      });
    } else {
      return Post.findAll().then(function(result) {
        return result;
      });
    }
  }
}

module.exports = postSchema;
