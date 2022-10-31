const express = require("express");
const app = express();
const userRouter = require("./Routes/user.route");

// const postData = [
//   {
//     name: "Taifur islam",
//     email: "TaifurislamAshraf@gmail.com",
//   },
//   {
//     name: "Rakibul islam",
//     email: "Rakibul@gamil.com",
//   },
// ];

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Home route</h1>");
  res.end();
});

app.use((req, res) => {
  res.send("<h1>404 page not found</h1>");
});

// app.post("/", (req, res) => {
//   res.send(postData);
//   res.end();
// });

// app.put("/", (req, res) => {
//   res.send("Put request form home");
//   res.end();
// });

// app.delete("/", (req, res) => {
//   res.send("delete request form home");
//   res.end();
// });

module.exports = app;
