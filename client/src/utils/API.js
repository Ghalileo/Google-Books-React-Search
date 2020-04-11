import axios from "axios";

export default {
    getBooks: () => {
        return axios.get("/api/books");
    },
    getBook: (id) => {
        return axios.get("/api/books/" + id);
    },
    searchBook: (query) => {
        let inquiry = `https://www.googleapis.com/books/v1/volume?q=${query}&maxResults=25`
        return axios.get(inquiry)
    }
}