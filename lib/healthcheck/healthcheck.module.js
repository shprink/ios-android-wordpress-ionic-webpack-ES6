import modConfig from './healthcheck.config';
import modController from './healthcheck.controller';

let mod = angular.module('prototype.healthcheck', [
    'ionic',
    'ui.router',
    'prototype.constant',	
    'wp-api-angularjs'
]);

mod.config(modConfig);
mod.controller('HealthcheckController', modController);

export default mod = mod.name
