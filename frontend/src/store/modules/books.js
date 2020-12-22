import axios from 'axios';

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
    }
}

const mutations = {
    setBooks: (state, books) => (state.books = books),
    removeBook: (state, id) => state.books = state.books.filter((book) => book.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
}