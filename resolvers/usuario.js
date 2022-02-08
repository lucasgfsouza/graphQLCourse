const profiles = require('../data/profiles.json');

module.exports = {

  salario(usuario) {
    return usuario.salario_real * 0.96;
  },
  perfil(usuario) {
    const [result] = profiles.filter((profile) => +profile.id === usuario.perfilId);
    return result;
  },

};
