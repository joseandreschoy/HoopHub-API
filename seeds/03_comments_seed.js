exports.seed = function (knex) {
  return knex("comments")
    .del()
    .then(function () {
      return knex("comments").insert([
        {
          content: "Great tweet!",
          tweet_id: 1,
          user_id: 1,
          username: "john_doe",
        },
        {
          content: "I agree!",
          tweet_id: 1,
          user_id: 2,
          username: "jane_smith",
        },
        {
          content: "Nice post!",
          tweet_id: 2,
          user_id: 3,
          username: "mark_johnson",
        },
        {
          content: "Well said!",
          tweet_id: 2,
          user_id: 4,
          username: "sarah_wilson",
        },
        {
          content: "Awesome!",
          tweet_id: 2,
          user_id: 5,
          username: "michael_brown",
        },
      ]);
    });
};
