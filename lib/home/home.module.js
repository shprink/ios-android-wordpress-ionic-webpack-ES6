import modConfig from './home.config';
import modController from './home.controller';

let mod = angular.module('prototype.home', [
    'ionic',
    'ui.router',
    'prototype.constant',
    'wp-api-angularjs'
]);

mod.config(modConfig);
mod.controller('HomeController', modController);

export default mod = mod.name
