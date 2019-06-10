// for gh-pages
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vuex-books-ls/" : "/"
};

// for surge
// module.exports = {
//   publicPath: process.env.NODE_ENV === "production" ? "/" : "/"
// };
