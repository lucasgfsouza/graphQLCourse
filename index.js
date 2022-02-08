const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');

const schemaPath = './schema/query.graphql';

const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`${url}`);
});
