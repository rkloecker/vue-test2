import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Book from "./components/Book.vue";
import AddBook from "./components/AddBook.vue";
import UpdateBook from "./components/UpdateBook.vue";
import BookDetail from "./components/BookDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/books",
      name: "book",
      component: Book
    },
    {
      path: "/books/:id",
      name: "bookdetail",
      component: BookDetail
    },
    {
      path: "/books/update/:id",
      name: "updateBook",
      component: UpdateBook
    },
    {
      path: "/addbook",
      name: "addbook",
      component: AddBook
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "*",
      component: Home
    }
  ]
});
