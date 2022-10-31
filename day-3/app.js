const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/contact", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/contact.html");
});

app.get("/register", (req, res) => {
  res.status(200).json({
    userName: "Taifur",
    statusCode: "200",
  });
});

app.get("/login", (req, res) => {
  res.redirect("/register");
});

app.get("/cooki", (req, res) => {
  //   res.cookie("password", "Taifur55");
  //   res.cookie("name", "hasan");
  res.clearCookie("name");
  res.clearCookie("password");
  res.end();
});

app.get("/header", (req, res) => {
  res.append("id", "200004");
  res.append("name", "Taifur");
  res.end();
});

module.exports = app;
