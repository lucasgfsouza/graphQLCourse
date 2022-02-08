const users = require('../data/users.json');
const profiles = require('../data/profiles.json');

module.exports = {

  perfis() {
    return profiles;
  },

  perfil(_, { id }) {
    const [result] = profiles.filter((profile) => +profile.id === +id);
    return result;
  },

  usuario(_, { id }) {
    const [result] = users.filter((user) => user.id === +id);
    return result;
  },

  usuarios() {
    return users;
  },

  usuarioLogado() {
    return {
      id: 1,
      salario_real: 1200,
    };
  },
};
