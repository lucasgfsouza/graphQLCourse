const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

type Usuario {
  id: ID
  nome: String
  email: String
  idade: Int
  salario: Float
  vip: Boolean 
}

type Produto {
  nome: String!
  preco: Float!
  desconto: Float
  precoComDesconto: Float
}

type Query {
  usuarioLogado: Usuario
  produto: Produto
}

`;

const resolvers = {

  Usuario: {
    salario(usuario) {
      return usuario.salario_real * 0.96;
    },
  },

  Produto: {
    precoComDesconto(produto) {
      return produto.preco * (1 - (produto.desconto / 100));
    },
  },

  Query: {
    usuarioLogado() {
      return {
        id: 1,
        salario_real: 1200,
      };
    },

    produto() {
      return {
        preco: 50,
        nome: 'espoja',
        desconto: 30,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`${url}`);
});
