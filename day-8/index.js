const express = require("express");
const app = express();
const PORT = 3000;

const myMiddelware = (req, res, next) => {
  console.log("I am Middelware Function");
  req.currentDate = new Date(Date.now());
  next();
};

// app.get("/", myMiddelware, (req, res) => {
//   console.log("I am Home" + req.currentDate);
//   res.send("Hello I am Home Route");
// });

app.use(myMiddelware);

app.get("/", (req, res) => {
  console.log("I am Home " + req.currentDate);
  res.send("Hello I am Home Route");
});

app.get("/about", (req, res) => {
  console.log("I am about " + req.currentDate);
  res.send("Hello I am about Route");
});

app.use((req, res, next) => {
  res.send("404 page not found");
});

app.use((err, req, res, next) => {
  res.status(500).send("Somthing broke");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
