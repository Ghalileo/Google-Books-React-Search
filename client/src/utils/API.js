import axios from "axios";

export default {
    // Retrieves books from google API
    getBooks: (q) => {
        return axios.get("/api/google", {params: { q: "title" + q} });
    },
    // Retrieve all saved books
    getSavedBooks: () => {
        return axios.get("/api/books");
    },
    // Deletes the saved book with the given id
    deleteBook: (id) => {
        return axios.delete("/api/books/" + id);
    },
    // Saves books to the database
    saveBook: (bookData) => {
        return axios.post("/api/books", bookData)
    }
    // Retrievs max of 5 search results
    // searchBook: function (query) {
    //     let inquiry = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5`
    //     return axios.get(inquiry)
    // }
}