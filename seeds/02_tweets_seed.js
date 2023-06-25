exports.seed = function (knex) {
  return knex("tweets")
    .del()
    .then(function () {
      return knex("tweets").insert([
        {
          content: "Hello, world!",
          user_id: 1,
          username: "john_doe",
        },
        {
          content: "Welcome to HoopHub!",
          user_id: 2,
          username: "jane_smith",
        },
        {
          content: "Exciting times ahead!",
          user_id: 3,
          username: "mark_johnson",
        },
        {
          content: "Great day for basketball!",
          user_id: 4,
          username: "sarah_wilson",
        },
        {
          content: "Love this community!",
          user_id: 5,
          username: "michael_brown",
        },
      ]);
    });
};
