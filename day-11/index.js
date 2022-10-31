const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 4000;
const users = require("./model/users.model");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const userRouter = require("./routes/users.route");

app.use(userRouter);

app.get("/my", (req, res) => {
  res.send(users);
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "404 page not Found",
  });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
