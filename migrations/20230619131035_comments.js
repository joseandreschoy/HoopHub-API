exports.up = function (knex) {
  return knex.schema.dropTableIfExists("comments").then(() => {
    return knex.schema.createTable("comments", function (table) {
      table.increments("id");
      table
        .integer("post_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("posts");
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.text("body").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("comments");
};
