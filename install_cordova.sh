#!/bin/sh

set -e

path=`dirname $0`
cd $path

read -p "Which platforms do you want to build? (android ios): " platforms
platforms=${platforms:-"android ios"}

# cleanup
echo "removing platforms/ plugins/"
rm -rf platforms/
rm -rf plugins/

# install platforms and plugin
echo "installing platforms "$platforms
npm run runCordova platform add $platforms

# re install specific plugins
npm run runCordova plugin add cordova-plugin-crosswalk-webview@1.2.0
npm run runCordova plugin add org.apache.cordova.inappbrowser@0.6.0
npm run runCordova plugin add org.apache.cordova.splashscreen@1.0.0
npm run runCordova plugin add org.apache.cordova.file@1.3.3
npm run runCordova plugin add org.apache.cordova.file-transfer@0.5.0
npm run runCordova plugin add org.apache.cordova.device@0.3.0
npm run runCordova plugin add org.apache.cordova.globalization@0.3.4
npm run runCordova plugin add org.apache.cordova.console@0.2.13
npm run runCordova plugin add org.apache.cordova.network-information@0.2.15
npm run runCordova plugin add org.pushandplay.cordova.apprate@1.1.7
npm run runCordova plugin add nl.x-services.plugins.toast@2.0.4
npm run runCordova plugin add nl.x-services.plugins.socialsharing@4.3.18
npm run runCordova plugin add com.ionic.keyboard@1.0.4
npm run runCordova plugin add com.google.playservices@19.0.0
npm run runCordova plugin add https://github.com/apache/cordova-plugin-statusbar.git#r1.0.1
# https://github.com/Wizcorp/phonegap-facebook-plugin/issues/1028
# npm run runCordova plugin add https://github.com/phonegap-build/PushPlugin.git#2.4.0
npm run runCordova plugin add https://github.com/danwilson/google-analytics-plugin.git#master
# FB
npm run runCordova plugin add https://github.com/Wizcorp/phonegap-facebook-plugin.git -- --variable APP_ID="1741623176064812" --variable APP_NAME="React2Pics"
android update project --subprojects --path "platforms/android" --target android-21 --library "CordovaLib"
android update project --subprojects --path "platforms/android" --target android-21 --library "com.phonegap.plugins.facebookconnect/FacebookLib"

cd platforms/android/

ant clean

cd com.phonegap.plugins.facebookconnect/FacebookLib

ant clean
