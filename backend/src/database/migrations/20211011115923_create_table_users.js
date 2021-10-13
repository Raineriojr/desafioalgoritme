
exports.up = function(knex) {
    return knex.schema.createTable('tbl_usuarios', (table)=>{
        table.increments('id_usuario'),
        table.string('nome').notNullable(),
        table.string('email').notNullable(),
        table.string('senha').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tbl_usuarios');
};
