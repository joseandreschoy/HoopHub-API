const knex = require("knex")(require("../knexfile"));

// Get all comments
exports.getComments = async (req, res) => {
  try {
    const comments = await knex("comments");
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single comment by ID
exports.getCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await knex("comments").where({ id }).first();

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new comment
exports.createComment = async (req, res) => {
  try {
    const { userId, tweetId, content } = req.body;

    // Validate input data, perform necessary checks

    const newComment = { userId, tweetId, content };
    const [commentId] = await knex("comments").insert(newComment);

    newComment.id = commentId;

    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update an existing comment
exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const updatedComment = await knex("comments")
      .where({ id })
      .update({ content }, ["id", "userId", "tweetId", "content"]);

    if (!updatedComment.length) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json(updatedComment[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedComment = await knex("comments").where({ id }).del();

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
