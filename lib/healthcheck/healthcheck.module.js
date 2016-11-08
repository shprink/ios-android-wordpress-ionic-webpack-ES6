import questionsConfig from './questions.config.json'
import modConfig from './healthcheck.config'
import modController from './healthcheck.controller'

let mod = angular.module('prototype.healthcheck', [
  'ionic',
  'ui.router'
])

mod.config(modConfig)
mod.controller('HealthcheckController', modController)
mod.constant('QUESTIONS_CONFIG', questionsConfig)

export default mod = mod.name
