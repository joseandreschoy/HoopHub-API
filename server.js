require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5050;
const UserController = require("./controllers/userController");

app.use(cors());
app.use(express.json());

app.post("/users", UserController.createUser);
app.get("/users/:id", UserController.getUser);
app.put("/users/:id", UserController.updateUser);
app.delete("/users/:id", UserController.deleteUser);

app.listen(PORT, () => {
  console.log(`Server starts on http://localhost:${PORT}`);
});
