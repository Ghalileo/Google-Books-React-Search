const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    link: {type: String},
    date: {type: Date, default:Date.Now},
    googleId: {type: String, unique: true, required: true }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;