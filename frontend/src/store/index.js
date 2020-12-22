// Entrypoint for vuex
import Vuex from 'vuex';
import Vue from 'vue';
import books from './modules/books';

// Load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    books
  }
});