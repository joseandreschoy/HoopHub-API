const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

// ...

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Get all users
exports.getUsers = (req, res) => {
  res.json(users);
};

// Get a single user by ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

// Create a new user
exports.createUser = (req, res) => {
  const { username, email } = req.body;

  // Validate input data, perform necessary checks

  const newUser = { id: users.length + 1, username, email };
  users.push(newUser);

  res.status(201).json(newUser);
};

// Update an existing user
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Perform update operation on the user

  user.username = username || user.username;
  user.email = email || user.email;

  res.json(user);
};

// Delete a user
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);

  res.sendStatus(204);
};
