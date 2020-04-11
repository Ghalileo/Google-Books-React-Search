import axios from "axios";

export default {
    getBooks: () => {
        return axios.get("/api/books");
    },
    getBook: (id) => {
        return axios.get("/api/books/" + id);
    },
    searchBook: function (query) {
        let inquiry = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5`
        return axios.get(inquiry)
    }
}