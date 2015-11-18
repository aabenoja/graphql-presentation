import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql';

export default new GraphQLObjectType({
  name: "Item",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    isComplete: { type: GraphQLBoolean }
  }
});
