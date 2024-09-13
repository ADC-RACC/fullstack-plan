export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('info').del()

  // Inserts seed entries
  await knex('info').insert([
    { id: 1, title: 'soup', info: 'its pretty good' },
    { id: 2, title: 'maths', info: 'ew...' },
    { id: 3, title: 'the rapid expansion of space', info: 'thats chill' },
  ])
}
