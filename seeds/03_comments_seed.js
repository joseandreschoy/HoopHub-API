exports.seed = function (knex) {
  // Deletes all existing entries
  return knex("comments")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("comments").insert([
        { user_id: 1, tweet_id: 1, content: "Great tweet!" },
        { user_id: 2, tweet_id: 1, content: "I agree!" },
      ]);
    });
};
