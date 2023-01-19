const express = require("express");
const router = express.Router();
const { db } = require("../config/database");
const multiparty = require("multiparty");
const multer = require("multer");

const storageEngine = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storageEngine,
});

const path = require("path");


router.post("/", upload.single("image"), function (req, res, next) {
  console.log(req.file);
  if (req.file) {
    res.send("Single file uploaded successfully");
  } else {
    res.status(400).send("Please upload a valid image");
  }
});

module.exports = router;
