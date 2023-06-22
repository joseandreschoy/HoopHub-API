// Get all tweets
exports.getTweets = (req, res) => {
  res.json(tweets);
};

// Get a single tweet by ID
exports.getTweetById = (req, res) => {
  const { id } = req.params;
  const tweet = tweets.find((tweet) => tweet.id === parseInt(id));

  if (!tweet) {
    return res.status(404).json({ message: "Tweet not found" });
  }

  res.json(tweet);
};

// Create a new tweet
exports.createTweet = (req, res) => {
  const { userId, content } = req.body;

  // Validate input data, perform necessary checks

  const newTweet = { id: tweets.length + 1, userId, content };
  tweets.push(newTweet);

  res.status(201).json(newTweet);
};

// Update an existing tweet
exports.updateTweet = (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const tweet = tweets.find((tweet) => tweet.id === parseInt(id));

  if (!tweet) {
    return res.status(404).json({ message: "Tweet not found" });
  }

  // Perform update operation on the tweet

  tweet.content = content || tweet.content;

  res.json(tweet);
};

// Delete a tweet
exports.deleteTweet = (req, res) => {
  const { id } = req.params;
  const index = tweets.findIndex((tweet) => tweet.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Tweet not found" });
  }

  tweets.splice(index, 1);

  res.sendStatus(204);
};
