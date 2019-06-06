import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);

// const dummydata = [
//   { id: "1557859714981", title: "Solaris", author: "Stanislaw Lem" },
//   {
//     id: "1557859741228",
//     title: "The Shrinking man",
//     author: "Richard Matheson"
//   },
//   { id: "1557910168148", title: "Der Prozess", author: "Franz Kafka" }
// ];

const dummydata = [];

const state = {
  books: [],
  singleBook: null
};

const mutations = {
  add: (state, book) => state.books.push(book),
  update: (state, book) =>
    (state.books = state.books.map(el => (el.id === book.id ? book : el))),
  getSingleBook: (state, id) => {
    state.singleBook = state.books.filter(el => el.id === id)[0];
    console.log(state.books);
    console.log(id);
  },

  remove: (state, id) => (state.books = state.books.filter(el => el.id !== id)),
  init: state =>
    (state.books =
      JSON.parse(localStorage.getItem("theCollection")) || dummydata),
  save: state =>
    localStorage.setItem("theCollection", JSON.stringify(state.books))
};

const getters = {
  allBooks: state => state.books,
  oneBook: state => state.singleBook
};

const actions = {
  addBook({ commit }, book) {
    commit("add", book);
    commit("save");
    router.push("/books");
  },
  init({ commit }) {
    commit("init");
  },
  getSingleBook({ commit }, id) {
    commit("getSingleBook", id);
  },
  updateBook({ commit }, book) {
    console.log("from store", book);
    commit("update", book);
    commit("save");
    router.push("/books");
  },
  removeBook({ commit }, id) {
    commit("remove", id);
    commit("save");
    router.push("/books");
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});
