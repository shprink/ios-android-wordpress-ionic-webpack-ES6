import modConfig from './post.config';
import modController from './post.controller';

let mod = angular.module('prototype.post', [
    'ionic',
    'ui.router',
    'prototype.constant',
    'wp-api-angularjs'
]);

mod.config(modConfig);
mod.controller('PostController', modController);

export default mod = mod.name
