#!/bin/bash

# =================================

# TITLE

debug_env () {
  echo -e "ENV\n_____\n"
  echo "INPUT: $INPUT"
  echo "OUTDIR: $OUTDIR"
  echo "PROJ_ROOT: $PROJ_ROOT"
  echo "SRC_DIR: $SRC_DIR"
  echo "THEME_DEST: $THEME_DEST"
  echo "DEST_BUILD: $OUTDIR/$BUILD_DIR"
  echo "DEST_DIST: $OUTDIR/$DIST_DIR"
  echo "STYLE_SRC: $STYLE_SRC"
  echo "STYLE_DIR: $STYLE_DIR"
  echo "npm_config_STYLE_DIR: $npm_config_STYLE_DIR"
  echo "npm_config_STYLE_SRC: $npm_config_STYLE_SRC"
  echo "npm_config_SRC_DIR: $npm_config_SRC_DIR"
  echo "OUTPUT DIR: $OUTDIR"
  echo "DEST_BUILD: $DEST_BUILD"
  echo "DEST_DIST: $DEST_DIST"
  echo "$PROJ_ROOT/$SRC_DIR/$STYLE_DIR"
  echo ""
}


clean_build () {
  command rm $DEST_BUILD/.build.css
  command rm $DEST_BUILD/.build.md
  command rm $DEST_BUILD/.build.html
}
