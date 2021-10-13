
exports.seed = function(knex) {
  return knex('tbl_usuarios').del()
    .then(function () {
      return knex('tbl_usuarios').insert([
        {nome: 'admin', email: 'admin@admin.com', senha: 'admin'},
      ]);
    });
};
