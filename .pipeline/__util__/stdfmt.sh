#!/bin/bash

# STDFMT - STANDARD FORMAT

INPUT=${1:?'nothing was given to format'}

# Remove trailing semicolons
# -----------------------------------------------------------------------------
kill_trailing_colons () {
  sed -e 's/;$//'
}
# Ensure space between `function` and opening bracket
# -----------------------------------------------------------------------------
function_open_braces_spaces () {
  sed -e 's/function(/function (/g'
}
# Ensure space after colons in object literal
# -----------------------------------------------------------------------------
object_colon_spaces () {
  sed  -E -e 's/:([^ ])/: \1/g'
}
# Ensure space after commas in object literal
# -----------------------------------------------------------------------------
object_comma_spaces () {
  sed  -E -e 's/,([^ ])/, \1/g'
}
# Use single quotes when defining strings
# -----------------------------------------------------------------------------
single_quoted_strings () {
  sed  -E -e "s/\"/'/g"
}
# Remove space in front of commas
# -----------------------------------------------------------------------------
# Note: that this is by no means foolproof as it will also convert the double
# quotes inside the string `'foo"bar'`!
no_comma_spaces_left () {
  sed  -e 's/ *,/,/g'
}
# Ensure one a single space around equal signs
# -----------------------------------------------------------------------------
equals_spaces () {
  sed  -e 's/  *=  */ = /g'
}
# Remove space in front of colons
# -----------------------------------------------------------------------------
no_colon_spaces_left () {
  sed  -e 's/ *:/:/g'
}
# Remove trailing line space
# -----------------------------------------------------------------------------
lines_no_trailing_spaces () {
  sed  -e 's/ *$//'
}

no_emptylines () {
  grep -v -e "^[[:space:]]*$"
}
select_lines () {
  grep "^/\*\?//"
}
strip_markers () {
  sed -r 's/^[*\/]+\s?//g; s/\*\/$/  /g'
}
line_ending_spaces () {
  sed -r 's/>$/  /g'
}


# EXAMPLE: Called manualy
# -----------------------------------------------------------------------------
standard_fixer () {
  INPUT=${1:-''}
  # READ FROM STD IN
  if [ -z $INPUT ]; then
    equals_spaces \
    | single_quoted_strings \
    | object_comma_spaces \
    | kill_trailing_colons \
    | lines_no_trailing_spaces \
    | no_emptylines \
    | sed 'a\\n'

  else
    cat $INPUT | standard_fixer
  fi
}
# EXAMPLE: Main
# -----------------------------------------------------------------------------
fix_project_format () {
  find . -path ./node_modules -prune -o -type f -name '*.js' -exec sed -i '' -e $FMT_RULES {} \;
}
standard_fixer $INPUT
