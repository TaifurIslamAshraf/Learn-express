const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send(
    "<h1>This is home route and i prectice regular expression with route value</h1>"
  );
});

app.get("/login/:id([0-9]{3})", (req, res) => {
  res.send(`<h1>Id: ${req.params.id}</h1>`);
});

app.get("/login/:title([a-zA-Z]+)", (req, res) => {
  res.send(`<h1>Title: ${req.params.title}</h1>`);
});

app.use("*", (req, res) => {
  res.status(404).send("<h1>404 page not found</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
