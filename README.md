# books app

### crud book app using Vuex, local storage and Materialize CSS 

deployment with gh-pages: https://rkloecker.github.io/vuex-books-ls/

deployment using surge: vuexbooks.surge.sh

important issuses using vue router history mode:

https://cli.vuejs.org/guide/deployment.html#general-guidelines

https://surge.sh/help/adding-a-200-page-for-client-side-routing

for deployment with gh-pages create vue.config.js:

`module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/'
}`

`bash deploy.sh <my-project>`

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```
