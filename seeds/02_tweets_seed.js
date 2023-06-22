exports.seed = function (knex) {
  // Deletes all existing entries
  return knex("tweets")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tweets").insert([
        { user_id: 1, content: "Hello, world!" },
        { user_id: 2, content: "Welcome to HoopHub!" },
      ]);
    });
};
