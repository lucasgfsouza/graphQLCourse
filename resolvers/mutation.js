const users = require('../data/users.json');

module.exports = {
  novoUsuario(_, { nome, email, idade }) {
    const [{ id: biggestId }] = users.sort((a, b) => {
      if (a.id > b.id) return -1;
      if (a.id < b.id) return 1;
      return 0;
    });

    const novo = {
      id: biggestId + 1,
      nome,
      email,
      idade,
      perfilId: 2,
      status: 'ATIVO',
    };
    users.push(novo);
    return {
      novo,
      message: 'user created successfully',
    };
  },
};
