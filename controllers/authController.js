const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const knex = require("knex")(require("../knexfile"));

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await knex("users").where({ email }).first();

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