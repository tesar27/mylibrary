import axios from 'axios';
const qs = require('querystring')
const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
}

const state = {
    books: []
}

const getters = {
    allBooks: (state) => {
        return state.books
    }
};

const actions = {
    async fetchBooks({commit}) {
        const response = await axios.get('http://localhost:3000/getbooks');

        commit('setBooks', response.data);
    },

    async deleteBook({commit}, id) {
        await axios.delete(`http://localhost:3000/deletebook/${id}`);

        commit('removeBook', id);
    },

    async updateBook({commit}, updatedBook) {
        const response = await axios.put(`http://localhost:3000/updatebooks/books/${updatedBook.id}`, updatedBook);
        console.log(response.data);
        commit('updateBook', response.data);
    },

    async addBook({commit}, newBook) {
        const response = await axios.post(`http://localhost:3000/addbook`, qs.stringify(newBook), config);
        console.log(response.data);
        commit('addBook', response.data);
    }
}

const mutations = {
    setBooks: (state, books) => (state.books = books),
    removeBook: (state, id) => state.books = state.books.filter((book) => book.id !== id),
    addBook: (state, book) => state.books.push(book)
};

export default {
    state,
    getters,
    actions,
    mutations
}