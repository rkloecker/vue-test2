#!/usr/bin/env sh
# run from bash with 
# bash deploy.sh <reponame>

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
git remote add origin "$1"
git push origin gh-pages

cd -