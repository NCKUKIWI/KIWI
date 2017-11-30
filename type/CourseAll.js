var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

var courseAllType = new GraphQLObjectType({
  name: "Courseall",
  description:"The courses in the past few years",
  fields: {
    id: {
      type: GraphQLInt
    },
    dep_name: {
      type: GraphQLString
    },
    dep_no: {
      type: GraphQLString
    },
    serial: {
      type: GraphQLString
    },
    course_no: {
      type: GraphQLString
    },
    class_no: {
      type: GraphQLString
    },
    class: {
      type: GraphQLString
    },
    grade: {
      type: GraphQLString
    },
    type: {
      type: GraphQLString
    },
    english: {
      type: GraphQLString
    },
    course_name: {
      type: GraphQLString
    },
    required: {
      type: GraphQLString
    },
    credit: {
      type: GraphQLInt
    },
    teacher: {
      type: GraphQLString
    },
    choose: {
      type: GraphQLInt
    },
    remaining: {
      type: GraphQLInt
    },
    time: {
      type: GraphQLString
    },
    classroom: {
      type: GraphQLString
    },
    note: {
      type: GraphQLString
    },
    limit: {
      type: GraphQLString
    },
    industry: {
      type: GraphQLString
    },
    attribute: {
      type: GraphQLString
    },
    edu_program: {
      type: GraphQLString
    },
    moocs: {
      type: GraphQLString
    },
    update_time: {
      type: GraphQLString,
    },
    comment_num: {
      type: GraphQLInt
    }
  }
});

module.exports = courseAllType;
