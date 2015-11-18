import { GraphQLObjectType, GraphQLList } from 'graphql';
import item from './item';

export default new GraphQLObjectType({
  name: "List",
  fields: {
    items: { type: new GraphQLList(item) }
  }
});
