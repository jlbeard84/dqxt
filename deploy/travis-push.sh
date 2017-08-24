#!/bin/sh

setup_git() {
  echo "setup_git"
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  echo "commit_website_files"
  git checkout -b pages
  git add . $TRAVIS_BUILD_DIR/platforms/browser/www
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  echo "upload_files"
  git remote add origin-pages https://${GH_TOKEN}@github.com/${GH_REPO}
  git push --quiet --set-upstream origin-pages pages 
}

setup_git
commit_website_files
upload_files
