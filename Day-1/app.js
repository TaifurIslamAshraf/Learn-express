const express = require("express");
const app = express();

const postData = [
  {
    name: "Taifur islam",
    email: "TaifurislamAshraf@gmail.com",
  },
  {
    name: "Rakibul islam",
    email: "Rakibul@gamil.com",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Welcome to server</h1>");
  res.end();
});

app.post("/", (req, res) => {
  res.send(postData);
  res.end();
});

app.put("/", (req, res) => {
  res.send("Put request form home");
  res.end();
});

app.delete("/", (req, res) => {
  res.send("delete request form home");
  res.end();
});

module.exports = app;
