#!/bin/bash



### THESE STEPS WORK IN 1. 2. 3.
find $ASSET_SVG_SRC -type f -name "*.svg"  -printf "\n\n%f\n\n"  -exec npx svgo --multipass --enable={cleanupAttrs,removeEmptyText,removeEmptyContainers,removeScriptElement,mergePaths,removeComments} --pretty -i {} -o "$ASSET_SVG_DEST/{}.pre.svg" \;
find $ASSET_SVG_SRC -type f -name "*.pre.svg"  -printf "\n\n%f\n\n"  -exec sed -i 's/from the Noun Project//g; s/Created by.*//g' "{}" \;
source .npmrc && find $ASSETRC/temp -type f -name "*.svg"  -printf "\n\n%f\n\n" -exec sed -i 's/from the Noun Project//g; s/Created by.*//g' "{}" \;
source .npmrc && npx svgo --multipass --enable={cleanupAttrs,removeEmptyText,removeEmptyContainers,removeScriptElement,mergePaths,removeComments} -i "$ASSET_SVG_DEST/temp"


# echo "$(cat  $ASSET_SVG_SRC/svg_n_contract_861531.svg)" |
# ASSET_SVG_SRC="$SRC_PATH/design/svg_in"
# npx svgo --pretty -i $ASSET_SVG_SRC -o -  | sed 's/from the Noun Project//g; s/Created by.*//g' | ./node_modules/.bin/svgo --multipass --enable={cleanupAttrs,removeEmptyText,removeEmptyContainers,removeScriptElement,mergePaths,removeComments} -i - -o $ASSET_SVG_DEST
# npx svgo --pretty -i $ASSET_SVG_SRC -o - | sed 's/from the Noun Project//g; s/Created by.*//g' |  ./node_modules/.bin/svgo  --multipass --enable={cleanupAttrs,removeEmptyText,removeEmptyContainers,removeScriptElement,mergePaths,removeComments} -i - -o $ASSET_SVG_DEST
# npx -c svgo --pretty -i $ASSET_SVG_SRC -o -  | sed 's/from the Noun Project//g; s/Created by.*//g' | ./node_modules/.bin/svgo --multipass --enable={cleanupAttrs,removeEmptyText,removeEmptyContainers,removeScriptElement,mergePaths,removeComments} -i - -o $ASSET_SVG_DEST
# find $ASSET_SVG_SRC -type f -name "*.svg"  -printf "\n\n%f\n\n" -exec cat {} \;
# find $ASSET_SVG_SRC -type f -name "*.svg" -printf "\n\n%f\n\n" -exec bash -c_meow {} \;
# find $ASSET_SVG_SRC -type f   -name "*.svg"  -printf "\n\n%f\n\n"   -exec npx svgo --multi-enable={cleanupAttrs,removeEmptyText,removeEmptyContainers,removeScriptElement,mergePaths,removeComments} --pretty -i {} -o - \;
# find $ASSET_SVG_SRC -type f -name "*.svg" -printf "\n\nSVGNAME=%f\n\n" -exec npx svgo --multipass --enable={cleanupAttrs,removeEmptyText,removeEmptyContainers,removeScriptElement,mergePaths,removeComments} --pretty -i {} -o - \;  | echo "$0"
# find $ASSET_SVG_SRC -type f -name "*.svg" -printf "\n\nSVGNAME=%f\n\n" -exec npx svgo --multipass --enable={cleanupAttrs,removeEmptyText,removeEmptyContainers,removeScriptElement,mergePaths,removeComments} --pretty --folder=$ASSET_SVG_SRC -o - | sed 's/from the Noun Project//g; s/Created by.*//g'
#
