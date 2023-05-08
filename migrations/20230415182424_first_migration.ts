import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .createTable("authors", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.text("bio").notNullable();
      table.timestamps(true, true);
    })
    .createTable("genres", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable().unique().index();
    })
    .createTable("books", (table) => {
      table.increments("id").primary();
      table.text("title").notNullable().unique().index();
      table.text("description").nullable();
      table.integer("price").notNullable();
      table
        .integer("author_id")
        .references("id")
        .inTable("authors")
        .notNullable();
      table.integer("genre_id").references("genres.id").notNullable();
      table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("books").dropTable("genres").dropTable("authors");
}
