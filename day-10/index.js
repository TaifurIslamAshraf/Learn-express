const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/users.route");

app.use(userRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "404 page not Found",
  });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
