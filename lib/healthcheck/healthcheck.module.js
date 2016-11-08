import questionsConfig from './questions.config.json'
import modConfig from './healthcheck.config'
import modController from './healthcheck.controller'
import responseOptionsComponent from './components/amount-response.component'

let mod = angular.module('prototype.healthcheck', [
  'ionic',
  'ui.router'
])

mod.config(modConfig)
mod.controller('HealthcheckController', modController)
mod.constant('QUESTIONS_CONFIG', questionsConfig)
mod.component('responseOptions', responseOptionsComponent)
export default mod = mod.name
