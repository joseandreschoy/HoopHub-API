const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// Route: GET /users
router.get("/", UserController.getAllUsers);

// Route: GET /users/:id
router.get("/:id", UserController.getUserById);

// Route: POST /users
router.post("/", UserController.createUser);

// Route: PUT /users/:id
router.put("/:id", UserController.updateUser);

// Route: DELETE /users/:id
router.delete("/:id", UserController.deleteUser);

module.exports = router;
