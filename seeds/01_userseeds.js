exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          id: 1,
          username: "john_doe",
          email: "john@example.com",
          password: "password123",
        },
        {
          id: 2,
          username: "jane_smith",
          email: "jane@example.com",
          password: "password456",
        },
      ]);
    });
};
