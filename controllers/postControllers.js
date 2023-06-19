// controllers/PostController.js

exports.createPost = async (req, res, db) => {
  try {
    const { user_id, title, body } = req.body;
    const newPost = await db("posts").insert({ user_id, title, body });
    res
      .status(201)
      .json({ message: "Post created successfully", data: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getPost = async (req, res, db) => {
  try {
    const postId = req.params.id;
    const post = await db("posts").where({ id: postId }).first();
    if (post) {
      res.status(200).json({ data: post });
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updatePost = async (req, res, db) => {
  try {
    const postId = req.params.id;
    const { user_id, title, body } = req.body;
    await db("posts").where({ id: postId }).update({ user_id, title, body });
    res.status(200).json({ message: "Post updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deletePost = async (req, res, db) => {
  try {
    const postId = req.params.id;
    await db("posts").where({ id: postId }).del();
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
