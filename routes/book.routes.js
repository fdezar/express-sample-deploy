const express = require('express');
const router = express.Router();
const Book = require("../models/Book.model");


router.post("/new", (req, res, next) => {
  Book.create(req.body)
    .then( (newBook) => {
      res.json(newBook);
    });
});

module.exports = router;
