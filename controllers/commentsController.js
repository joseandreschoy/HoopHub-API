// Get all comments
exports.getComments = (req, res) => {
  res.json(comments);
};

// Get a single comment by ID
exports.getCommentById = (req, res) => {
  const { id } = req.params;
  const comment = comments.find((comment) => comment.id === parseInt(id));

  if (!comment) {
    return res.status(404).json({ message: "Comment not found" });
  }

  res.json(comment);
};

// Create a new comment
exports.createComment = (req, res) => {
  const { userId, tweetId, content } = req.body;

  // Validate input data, perform necessary checks

  const newComment = { id: comments.length + 1, userId, tweetId, content };
  comments.push(newComment);

  res.status(201).json(newComment);
};

// Update an existing comment
exports.updateComment = (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const comment = comments.find((comment) => comment.id === parseInt(id));

  if (!comment) {
    return res.status(404).json({ message: "Comment not found" });
  }

  // Perform update operation on the comment

  comment.content = content || comment.content;

  res.json(comment);
};

// Delete a comment
exports.deleteComment = (req, res) => {
  const { id } = req.params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Comment not found" });
  }

  comments.splice(index, 1);

  res.sendStatus(204);
};
