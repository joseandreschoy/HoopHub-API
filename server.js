require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server starts on http://localhost:${PORT}`);
});
