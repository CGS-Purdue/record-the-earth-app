#!/bin/bash



grep -ir  "\./.*$" \
    --only-matching  \
    --with-filename  . \
        |  sed -E -e 's/[;]//g; s/:/\t\t/g'  \
        | sort |column -t \
        | tr -d "';"
