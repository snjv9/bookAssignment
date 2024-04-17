const mongoose = require('mongoose');
const Book = require("./bookModel")

const reviewSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'Review can not be empty!']
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    book: {
        type: mongoose.Schema.ObjectId,
        ref: 'Book',
        required: [true, 'Review must belong to a Book.']
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
