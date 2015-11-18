import { GraphQLSchema, GraphQLObjectType, GraphQLInt } from 'graphql';
import list from './list';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "rootQuery",
    fields: {
      list: {
        type: list,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, {id}) => root[id]
      }
    }
  })
});
