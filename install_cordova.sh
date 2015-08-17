#!/bin/sh

set -e

path=`dirname $0`
cd $path

read -p "Which platforms do you want to build? (android ios): " platforms
platforms=${platforms:-"android ios"}

# cleanup
echo "removing platforms/"
rm -rf platforms/
echo "removing plugins/"
rm -rf plugins/

# install platforms
echo "installing platforms ${platforms}"

if [[ " ${platforms[*]} " == *" android "* ]]; then
    npm run platformAddAndroid
fi

if [[ " ${platforms[*]} " == *" ios "* ]]; then
    npm run platformAddIOS
fi

# install platforms
echo "installing plugins"

npm run pluginAddAll
