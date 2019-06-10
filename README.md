# books app

### crud book app using Vuex, Vue Router, local storage and Materialize CSS

gh-pages uses router mode: hash

[deployment with gh-pages](https://rkloecker.github.io/vuex-books-ls/)

[deployment using surge](http://vuexbooks.surge.sh)

important issues using vue router history mode:

https://cli.vuejs.org/guide/deployment.html#general-guidelines

https://surge.sh/help/adding-a-200-page-for-client-side-routing

for deployment with gh-pages create vue.config.js:

`module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/'
}`

`bash deploy.sh <my-project>`

for deployment with surge create 200.html inside dist folder and paste content of index.html

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
