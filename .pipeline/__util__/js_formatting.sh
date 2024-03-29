#!/bin/bash

## REQUIRES js-beautify
# npm i -g js-beautify
function fix_js_in_folder() {
  #  cat *.js | js-beautify -s 2 --brace-style expand --space-after-anon-function --unescape-strings --good-stuff
  SEARCH=$1
  OUTPATH=./cleaned/

  for FILENAME in ./*.js; do
    echo $FILENAME
    printf "\n"
    printf "----------------"
    cat $FILENAME | js-beautify -s 2 --brace-style expand --space-after-anon-function --unescape-strings --good-stuff -o $OUTPATH/$FILENAME
  done
}

# FIND JAVASCRIPT FILES IN FOLDER, UN-MINIFY THEM, THEN GREP FOR A STRING
# TO IMPROVE UPON THIS BEHAVIOR
## #find . -maxdepth 1 -name "*.js" -printf "%p\n" -exec cat {} \; | js-beautify | grep -i $string
function fix_js_find_in_files() {
  SEARCH=$1

  for FILENAME in ./*.js; do
    echo $FILENAME
    printf "\n"
    cat $FILENAME | js-beautify | grep -i "$SEARCH"
  done
}
