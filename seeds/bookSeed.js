const mongoose = require("mongoose");
const db = require("../models");

mongoose.connext(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: "",
        date: ""
    }
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + "records retrieved!!!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });