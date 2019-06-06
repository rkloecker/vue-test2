#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'
git checkout -b gh-pages
# https://github.com/<USERNAME>/<repo>.git
git remote add origin https://github.com/rkloecker/vuex-books-ls.git
git push origin gh-pages

cd -