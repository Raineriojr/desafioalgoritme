
exports.up = function(knex) {
    return knex.schema.createTable('tbl_clientes', (table)=>{
        table.increments('id_cliente'),
        table.string('nome').notNullable(),
        table.string('telefone').notNullable(),
        table.date('data_nascimento').notNullable(),
        table.float('renda').notNullable(),
        table.boolean('status').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tbl_clientes');
};
