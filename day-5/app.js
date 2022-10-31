const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// practice with postman

// app.post("/user", (req, res) => {
//   const { name, age, id } = req.body;
//   res.send(`name: ${name} age: ${age} id: ${id}`);
// });

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
  const { fullName, email } = req.body;
  res.send(`<h1>Full Name: ${fullName} <br/> Email: ${email}</h1>`);
});

module.exports = app;
