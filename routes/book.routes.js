const express = require('express');
const router = express.Router();
const Book = require("../models/Book.model");

router.get("/", (req, res, next) => {
  Book.find()
    .then( books => {
      res.render('books/all', { books });
    });
});

router.get("/new", (req, res, next) => {
  res.render('books/new');
});

router.post("/new", (req, res, next) => {
  Book.create(req.body)
    .then( () => {
      res.redirect('/books')
    });
});

module.exports = router;
