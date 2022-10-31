require("dotenv").config();
const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("mongodb atlas is connected");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
