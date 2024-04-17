const mongoose = require('mongoose')
const { Schema } = mongoose

// Define Book Schema and Model
const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title can not be empty!']
    },
    author: {
        type: String,
        required: [true, 'Author can not be empty!']
    },
    genre: {
        type: String,
        required: [true, 'Genre can not be empty!']
    },
    description: {
        type: String,
        required: [true, 'Description can not be empty!']
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Virtual populate
bookSchema.virtual('reviews', {
    ref: 'Review',
    foreignField: 'book',
    localField: '_id'
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;