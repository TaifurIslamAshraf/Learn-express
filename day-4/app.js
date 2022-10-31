const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = req.query.username;
  const id = req.query.id;
  res.send(`<h1>userName: ${name} </br> id: ${id}</h1>`);
});

app.get("/username/:name/userid/:id", (req, res) => {
  const name = req.params.name;
  const id = req.params.id;
  res.send(`<h1>userName: ${name} </br> id: ${id}</h1>`);
});

app.get("/header", (req, res) => {
  const name = req.header("name");
  const id = req.header("id");
  res.send(`<h1>userName: ${name} </br> id: ${id}</h1>`);
});

module.exports = app;
