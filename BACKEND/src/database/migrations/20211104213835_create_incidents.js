exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments(); //criar numeros sequenciais (1, 2, 3)

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); //notNullable = não pode ser nulo

        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
