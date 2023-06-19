exports.seed = function (knex) {
  return knex("posts")
    .del()
    .then(function () {
      return knex("posts").insert([
        {
          id: 1,
          user_id: 1,
          title: "First Post",
          body: "This is the body of the first post.",
        },
        {
          id: 2,
          user_id: 2,
          title: "Second Post",
          body: "This is the body of the second post.",
        },
      ]);
    });
};
