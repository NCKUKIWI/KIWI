var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

var rateType = new GraphQLObjectType({
  name: "Rate",
  description: "The rates of the course",
  fields: {
    id: {
      type: GraphQLInt
    },
    hard: {
      type: GraphQLInt
    },
    sweet: {
      type: GraphQLInt
    },
    recommand: {
      type: GraphQLInt
    },
    user_id: {
      type: GraphQLInt
    },
    give: {
      type: GraphQLInt
    },
    got: {
      type: GraphQLInt
    },
    post_id: {
      type: GraphQLInt
    },
    course_name: {
      type: GraphQLString
    },
    teacher: {
      type: GraphQLString
    }
  }
});

module.exports = rateType;
