#!/bin/sh

Red="\033[0;31m"    # Red
Green="\033[0;32m"  # Green
BICyan="\033[1;96m" # Bold Cyan
Color_Off="\033[0m" # Text Reset

printf "\n\n$BICyan$(echo Building the project..)$Color_Off"

yarn lint

if [ $? != 0 ]; then
  printf "\n\n$Red$(echo Linting failed.)$Color_Off"
  exit 1
fi

printf "\n\n$BICyan$(echo Building the project..:)$Color_Off"

rm -r dist
yarn build

if [ $? != 0 ]; then
  printf "\n\n$Red$(echo Building failed failed.)$Color_Off"
  exit 1
fi

printf "\n\n$BICyan$(echo Bumping the release number..)$Color_Off"

yarn release

printf "\n\n$BICyan$(echo Publishing new version..)$Color_Off"

yarn publish-release

printf "\n\n"
