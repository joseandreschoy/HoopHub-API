exports.seed = function (knex) {
  // Deletes all existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "john_doe",
          email: "john@example.com",
          password: "password",
        },
        {
          username: "jane_smith",
          email: "jane@example.com",
          password: "password",
        },
      ]);
    });
};
