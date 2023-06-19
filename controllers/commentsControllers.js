// controllers/CommentsController.js

exports.createComment = async (req, res, db) => {
  try {
    const { post_id, name, email, body } = req.body;
    const newComment = await db("comments").insert({
      post_id,
      name,
      email,
      body,
    });
    res
      .status(201)
      .json({ message: "Comment created successfully", data: newComment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getComment = async (req, res, db) => {
  try {
    const commentId = req.params.commentId;
    const comment = await db("comments").where({ id: commentId }).first();
    if (comment) {
      res.status(200).json({ data: comment });
    } else {
      res.status(404).json({ error: "Comment not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateComment = async (req, res, db) => {
  try {
    const commentId = req.params.commentId;
    const { post_id, name, email, body } = req.body;
    await db("comments")
      .where({ id: commentId })
      .update({ post_id, name, email, body });
    res.status(200).json({ message: "Comment updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteComment = async (req, res, db) => {
  try {
    const commentId = req.params.commentId;
    await db("comments").where({ id: commentId }).del();
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
