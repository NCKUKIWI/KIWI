var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

var postType = new GraphQLObjectType({
  name: "Post",
  description: "All the posts",
  fields: {
    id: {
      type: GraphQLInt
    },
    course_name: {
      type: GraphQLString
    },
    teacher: {
      type: GraphQLString
    },
    catalog: {
      type: GraphQLString
    },
    semester: {
      type: GraphQLString
    },
    score_style: {
      type: GraphQLString
    },
    course_style: {
      type: GraphQLString
    },
    course_need: {
      type: GraphQLString
    },
    exam_style: {
      type: GraphQLString
    },
    report_hw: {
      type: GraphQLString
    },
    comment: {
      type: GraphQLString
    },
    report_count: {
      type: GraphQLString
    },
    user_id: {
      type: GraphQLInt
    },
    created_at: {
      type: GraphQLString
    }
  }
});

module.exports = postType;
