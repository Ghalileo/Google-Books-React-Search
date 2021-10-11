const axios = require("axios");
const db = require("../models")

// Methods defined for the google controller

// FindAll searches the Google Boks API and returns only entries we havent saved

// Additionally, it makes sure that the books returned from the API all contaain title, author, link, description, and image

module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;
        axios
            .get("https://www.googleapis.com/books/v1/volumes", {
                params
            }).then(results =>
                results.data.items.filter  ( 
                    result =>
                result.VolumeInfo.title &&
                result.VolumeInfo.author &&
                result.VolumeInfo.infoLink &&
                result.VolumeInfo.description && 
                result.VolumeInfo.imageLinks &&
                result.VolumeInfo.imageLinks.thumbnail 
                 )).then(apiBooks => 
                    db.Book.find().then(dbBooks =>
                        apiBooks.filter(apiBook =>
                            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id))))
                            .then(books => res.json(books))
                            .catch(err => res.status(422).json(err))
                            
    }
};