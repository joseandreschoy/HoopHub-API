const knex = require("knex")(require("../knexfile"));

// Get all tweets
exports.getTweets = async (req, res) => {
  try {
    const tweets = await knex("tweets");
    res.json(tweets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single tweet by ID
exports.getTweetById = async (req, res) => {
  try {
    const { id } = req.params;
    const tweet = await knex("tweets").where({ id }).first();

    if (!tweet) {
      return res.status(404).json({ message: "Tweet not found" });
    }

    res.json(tweet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new tweet
exports.createTweet = async (req, res) => {
  try {
    const { userId, content } = req.body;

    // Validate input data, perform necessary checks

    const newTweet = { userId, content };
    const [tweetId] = await knex("tweets").insert(newTweet);

    newTweet.id = tweetId;

    res.status(201).json(newTweet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update an existing tweet
exports.updateTweet = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const updatedTweet = await knex("tweets")
      .where({ id })
      .update({ content }, ["id", "userId", "content"]);

    if (!updatedTweet.length) {
      return res.status(404).json({ message: "Tweet not found" });
    }

    res.json(updatedTweet[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a tweet
exports.deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTweet = await knex("tweets").where({ id }).del();

    if (!deletedTweet) {
      return res.status(404).json({ message: "Tweet not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
