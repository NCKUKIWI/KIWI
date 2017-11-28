var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

var Post = require('../model/Post');

var postType = new GraphQLObjectType({
	name: "Post",
	description: "A post",
	fields: {
		id :{
			type: GraphQLInt
		},
		course_name :{
			type: GraphQLString
		}
	}
});

var postSchema = {
  type : new GraphQLList(postType),
  description: "Post",
  args : {
    id : {
      type: GraphQLInt,
      description:"post id"
    }
  },
  resolve(root,params,ctx){
    if(params.id) {
      return Post.findOne({where: {id:params.id}}).then(function(result) {
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