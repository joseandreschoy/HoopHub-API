exports.up = function (knex) {
  return knex.schema.createTable("posts", function (table) {
    table.increments("id");
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");
    table.string("title").notNullable();
    table.text("body").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("posts");
};
