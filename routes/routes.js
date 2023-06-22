const express = require("express");
const router = express.Router();

// Import controllers
const usersController = require("../controllers/usersControllers");
const tweetsController = require("../controllers/tweetsController");
const commentsController = require("../controllers/commentsController");

// Users Routes
router.get("/users", usersController.getUsers);
router.get("/users/:id", usersController.getUserById);
router.post("/users", usersController.createUser);
router.put("/users/:id", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUser);

// Tweets Routes
router.get("/tweets", tweetsController.getTweets);
router.get("/tweets/:id", tweetsController.getTweetById);
router.post("/tweets", tweetsController.createTweet);
router.put("/tweets/:id", tweetsController.updateTweet);
router.delete("/tweets/:id", tweetsController.deleteTweet);

// Comments Routes
router.get("/comments", commentsController.getComments);
router.get("/comments/:id", commentsController.getCommentById);
router.post("/comments", commentsController.createComment);
router.put("/comments/:id", commentsController.updateComment);
router.delete("/comments/:id", commentsController.deleteComment);

module.exports = router;
