
exports.seed = function(knex) {
  return knex('tbl_clientes').del()
    .then(function () {
      return knex('tbl_clientes').insert([
        {nome: 'Rainério Júnior', telefone: '(96)99188-5555', data_nascimento: '1998-05-03', renda: 2500.00, status:1},
        {nome: 'Luciano Rodrigues', telefone: '(96)6565-6565', data_nascimento: '2000-10-03', renda: 1200.00, status:1},
        {nome: 'Victor Melo', telefone: '(96)6666-5555', data_nascimento: '1999-02-01', renda: 2000.00, status:1}
      ]);
    });
};
