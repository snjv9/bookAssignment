const cors = require('cors');
const express = require('express');
const Book = require("./models/bookModel")
const Review = require("./models/reviewModel")
const app = express();
const bookRouter = require("./routes/bookRouter")
const userRouter = require("./routes/userRouter")

// Middleware
app.use(cors());
app.use(express.json());


// API Endpoints
app.use('/api/books', bookRouter)
module.exports = app;