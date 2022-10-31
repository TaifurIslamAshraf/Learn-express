require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hi I am Home route");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
