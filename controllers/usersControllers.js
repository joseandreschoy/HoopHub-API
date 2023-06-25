const knex = require("knex")(require("../knexfile"));

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await knex("users").select("*");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: true, message: "Error retrieving users" });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await knex("users")
      .where({ id: parseInt(id) })
      .first();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: true, message: "Error retrieving user" });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Validate input data, perform necessary checks

  try {
    const newUser = { username, email, password };
    const [userId] = await knex("users").insert(newUser);
    const createdUser = await knex("users").where({ id: userId }).first();
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: true, message: "Error creating user" });
  }
};

// Update an existing user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  try {
    const user = await knex("users")
      .where({ id: parseInt(id) })
      .first();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Perform update operation on the user
    await knex("users")
      .where({ id: parseInt(id) })
      .update({ username, email });

    const updatedUser = await knex("users")
      .where({ id: parseInt(id) })
      .first();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: true, message: "Error updating user" });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await knex("users")
      .where({ id: parseInt(id) })
      .first();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Perform delete operation on the user
    await knex("users")
      .where({ id: parseInt(id) })
      .del();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: true, message: "Error deleting user" });
  }
};
