exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
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
        {
          username: "mark_johnson",
          email: "mark@example.com",
          password: "password",
        },
        {
          username: "sarah_wilson",
          email: "sarah@example.com",
          password: "password",
        },
        {
          username: "michael_brown",
          email: "michael@example.com",
          password: "password",
        },
      ]);
    });
};
