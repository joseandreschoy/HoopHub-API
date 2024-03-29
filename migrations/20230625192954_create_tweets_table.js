exports.up = function (knex) {
  return knex.schema.createTable("tweets", function (table) {
    table.increments("id").primary();
    table.string("content").notNullable();
    table.integer("user_id").unsigned().notNullable();
    table.foreign("user_id").references("users.id");
    table.string("username").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tweets");
};
