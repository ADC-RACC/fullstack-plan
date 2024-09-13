export async function up(knex) {
  return knex.schema.createTable('info', (table) => {
    table.increments('id')
    table.string('title')
    table.string('info')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('info')
}
