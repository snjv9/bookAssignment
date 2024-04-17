const express = require('express');
const router = express.Router();
const Book = require("../models/bookModel")
const Review = require("../models/reviewModel")

router.get('/', async (req, res) => {
    const books = await Book.find().populate('reviews');
    res.json(books);
});

router.get('/:id', async (req, res) => {
    const books = await Book.findById(req.params.id).populate('reviews');
    res.json(books);
});


router.post('/', async (req, res, next) => {
    const book = new Book(req.body);
    await book.save();
    res.json(book);
});
router.post("/:bookId/reviews", async (req, res, next) => {
    const review = new Review({ comment: req.body.comment, rating: req.body.rating, book: req.params.bookId })
    await review.save();
    res.json(review);
})

module.exports = router;