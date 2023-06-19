// userController.js
const knex = require("../database/connection");

const UserController = {
  async createUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const newUser = { username, email, password };

      const userIds = await knex("users").insert(newUser);
      const userId = userIds[0];

      res.status(201).json({ id: userId, ...newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create user" });
    }
  },

  async getUser(req, res) {
    try {
      const userId = req.params.id;

      const user = await knex("users").where("id", userId).first();
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to retrieve user" });
    }
  },

  async updateUser(req, res) {
    try {
      const userId = req.params.id;
      const { username, email, password } = req.body;
      const updatedUser = { username, email, password };

      const count = await knex("users").where("id", userId).update(updatedUser);

      if (count === 0) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json({ id: userId, ...updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update user" });
    }
  },

  async deleteUser(req, res) {
    try {
      const userId = req.params.id;

      const count = await knex("users").where("id", userId).del();

      if (count === 0) {
        return res.status(404).json({ error: "User not found" });
      }

      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete user" });
    }
  },
};

module.exports = UserController;
