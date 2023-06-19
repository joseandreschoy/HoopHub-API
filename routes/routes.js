const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userControllers");
const PostController = require("../controllers/postControllers");
const CommentsController = require("../controllers/commentsControllers");

// User Routes
router.get("/users", UserController.getAllUsers);
router.get("/users/:id", UserController.getUserById);
router.post("/users", UserController.createUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

// Post Routes
router.post("/posts", PostController.createPost);
router.get("/posts/:id", PostController.getPost);
router.put("/posts/:id", PostController.updatePost);
router.delete("/posts/:id", PostController.deletePost);

// Comment Routes
router.post("/posts/:postId/comments", CommentsController.createComment);
router.get("/posts/:postId/comments/:commentId", CommentsController.getComment);
router.put(
  "/posts/:postId/comments/:commentId",
  CommentsController.updateComment
);
router.delete(
  "/posts/:postId/comments/:commentId",
  CommentsController.deleteComment
);

module.exports = router;
