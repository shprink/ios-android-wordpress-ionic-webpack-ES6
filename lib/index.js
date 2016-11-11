import 'ionic-sdk/release/js/ionic.bundle'
import 'expose?_!lodash'
import 'wp-api-angularjs/dist/wp-api-angularjs.bundle'
import 'angular-storage'

// import 'ngstorage-webpack'
// console.log(foo)
// Our modules
import modConstant from './constant.js'
import modConfigWP from './config/wp.config.js'
import modConfigIonic from './config/ionic.config.js'
import modConfigRouter from './config/router.config.js'
import modRun from './run.js'
import modHome from './home/home.module.js'
import modPost from './post/post.module.js'
import modMenu from './menu/menu.module.js'
import modHealthcheck from './healthcheck/healthcheck.module.js'
import modStorage from './storage/storage.module.js'
import modWizard from './wizard/wizard.module.js'

// Style entry point
import './scss/bootstrap'

// Create our prototype module
let mod = angular.module('prototype', [
  'ionic',
  'ui.router',
  'wp-api-angularjs',
  'angular-storage',
  // 'ngstorage-webpack',
  // require('ngstorage-webpack'),
  modConstant,
  modHome,
  modMenu,
  modPost,
  modHealthcheck,
  modStorage,
  modWizard
])
// ROUTER CONFIG
mod.config(modConfigRouter)
// IONIC CONFIG
mod.config(modConfigIonic)
// WordPress CONFIG
mod.config(modConfigWP)
// Run
mod.run(modRun)

export default mod = mod.name
