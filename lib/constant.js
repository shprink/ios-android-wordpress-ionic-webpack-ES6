import defaultConfig from '../config/default.config.json';
import localConfig from '../config/config.json';
import deepExtend from 'deep-extend';

let config = deepExtend(defaultConfig, localConfig);

let mod = angular.module('prototype.constant', []).constant('CONFIG', config);

export default mod = mod.name
