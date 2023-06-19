require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5050;
const UserController = require("./controllers/userControllers");
const PostController = require("./controllers/postControllers");
const CommentsController = require("./controllers/commentsControllers");

app.use(cors());
app.use(express.json());

// User routes
app.post("/users", UserController.createUser);
app.get("/users/:id", UserController.getUser);
app.put("/users/:id", UserController.updateUser);
app.delete("/users/:id", UserController.deleteUser);

// Post routes
app.post("/posts", PostController.createPost);
app.get("/posts/:id", PostController.getPost);

// Comment routes
app.post("/comments", CommentsController.createComment);
app.get("/comments/:id", CommentsController.getComment);

app.listen(PORT, () => {
  console.log(`Server starts on http://localhost:${PORT}`);
});
