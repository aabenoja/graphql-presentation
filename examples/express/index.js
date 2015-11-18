import express from 'express';
import graphqlHTTP from 'express-graphql';
import todoSchema from './src/schema';
import testData from './test-data';

const app = express();

app.set('view engine', 'jade');
app.use('/graphql', graphqlHTTP({ schema: todoSchema, graphiql: true, rootValue: testData }));

app.use((req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('server started');
});
