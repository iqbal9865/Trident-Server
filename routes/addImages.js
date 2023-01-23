const express = require("express");
const router = express.Router();
const { db } = require("../config/database");
const multer = require("multer");
const { Image } = require("../models/index");

const storageEngine = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storageEngine,
});

router.post("/", upload.single("image"), function (req, res, next) {
  const { filename, mimetype, size } = req.file;
  const path = req.file.path;
  const image = new Image();

  const queryStr = `INSERT INTO "image_data" ("filename", "path", "mimetype", "size") values($1, $2, $3, $4)`;
  const values = [filename, path, mimetype, size];

  image.uploadImage(queryStr, values, (error, response) => {
    if (error) {
      res.status(400).json({ success: false, error: error.detail });
    } else {
      res.status(200).json({ success: true, filename });
    }
  });
});

module.exports = router;
