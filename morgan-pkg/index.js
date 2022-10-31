const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

app.use(morgan("short"));

app.get("/product", (req, res) => {
  res.status(200).send("<h1>This is product route</h1>");
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
