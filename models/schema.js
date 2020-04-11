const mongoose = require("mongoose");
const Schema = mongoose.Schema;;

const bookSchema = new Schema({
    title: {type: String, requred: true},
    author: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    link: {type: String},
    date: {type: Date, default:Date.Now}
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;