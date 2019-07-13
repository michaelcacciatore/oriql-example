const { ApolloServer } = require('apollo-server');
const { compile: compileSchema } = require('oriql');

(async () => {
  const schema = await compileSchema();

  const server = new ApolloServer({ schema });

  server.listen().then(() => console.log('server is running on localhost:4000'));

})()