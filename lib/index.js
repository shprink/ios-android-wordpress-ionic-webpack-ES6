import 'angular'
import 'angular-animate'
import 'angular-sanitize'
import 'angular-ui-router'
import 'ionic-sdk/release/js/ionic'
import 'ionic-sdk/release/js/ionic-angular'
import 'expose?_!lodash'
import 'wp-api-angularjs/dist/wp-api-angularjs.bundle'

// Our modules
import modConfig from './config.js';
import modConfigWP from './config/wp.config.js';
import modConfigIonic from './config/ionic.config.js';
import modConfigRouter from './config/router.config.js';
import modRun from './run.js';
import modHome from './home/home.module.js';
import modPost from './post/post.module.js';
import modMenu from './menu/menu.module.js';

// Style entry point
import './scss/bootstrap'

// Create our prototype module
let mod = angular.module('prototype', [
    'ionic',
    'ui.router',
    'wp-api-angularjs',
    modConfig,
    modHome,
    modMenu,
    modPost
]);
// ROUTER CONFIG
mod.config(modConfigRouter);
// IONIC CONFIG
mod.config(modConfigIonic);
// WordPress CONFIG
mod.config(modConfigWP);
// Run
mod.run(modRun);

export default mod = mod.name;
