const express = require('express');
const router = express.Router();
const { db } = require('../config/database');

router.get('/', function(req, res, next) {
  db.query("select * from users", (error, results) => {
    if(error) {
      console.log(error);
      res.send(error);
    }
    else {
      let data = results.rows;
      console.log('users data: ', data);
      res.send(data);
    }
  });
});

module.exports = router;
