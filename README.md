### Tuts+ Tutorial: Creating iOS & Android mobile applications for WordPress using Ionic SDK, Webpack, ES6 and WP-API

#### Instructor: Julien Renaux

Creating hybrid applications with technologies such as Ionic SDK and Cordova has been really popular lately. This tutorial shows you how you can leverage those technologies and the WordPress API (WP-API) to build a tailored application for your website needs.

Tuts+ tutorial: [Creating iOS & Android mobile applications for WordPress using Ionic SDK, Webpack, ES6 and WP-API](http://code.tutsplus.com/tutorials/creating-ios-android-mobile-applications-for-wordpress-using-ionic-framework-webpack-es6-and-wp-api--cms-24170)

### Install

```
cp config/default.config.json config/config.json
npm install

# Cordova
cp config.dist.xml config.xml
npm run installCordova
```

### Run

```
# Web
npm run devserver

# Android
npm run runAndroid

# iOS
npm run runIosEmulator
npm run runIosDevice
```
