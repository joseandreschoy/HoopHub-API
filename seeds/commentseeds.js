exports.seed = function (knex) {
  return knex("comments")
    .del()
    .then(function () {
      return knex("comments").insert([
        {
          id: 1,
          post_id: 1,
          name: "John",
          email: "john@example.com",
          body: "This is a comment on the first post.",
        },
        {
          id: 2,
          post_id: 1,
          name: "Jane",
          email: "jane@example.com",
          body: "This is another comment on the first post.",
        },
        {
          id: 3,
          post_id: 2,
          name: "John",
          email: "john@example.com",
          body: "This is a comment on the second post.",
        },
      ]);
    });
};
