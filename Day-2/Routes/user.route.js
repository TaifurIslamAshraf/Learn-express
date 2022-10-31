const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("<h1>Welcome to Login Route</h1>");
});

router.get("/register", (req, res) => {
  res.send("<h1>Welcome to register Route</h1>");
});

module.exports = router;
