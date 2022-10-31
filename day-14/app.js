const express = require("express");
const app = express();
const multer = require("multer");
const UserImg = require("./models/user.model");

require("./config/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//multer file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/");
  },

  filename: function (req, file, cb) {
    const fileName = Date.now() + "_" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("<h1>How to upload a file</h1>");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/register", upload.single("image"), async (req, res) => {
  try {
    const myImg = await new UserImg({
      image: req.file.filename,
    });

    await myImg.save();
    res.status(201).send(myImg);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = app;
