export default function($scope, $state, $ionicHistory, $log, $q, QUESTIONS_CONFIG, storage) {
  'ngInject'

  const vm = this
  vm.questions = QUESTIONS_CONFIG
  vm.responses = {}
  // actions
  vm.startCondition = startCondition
  vm.submit = submit

  function startCondition() {
    return true
  }

  function submit(form) {
    $log.info('form', form)

    const dao = new HealthcheckDAO(vm.responses)
    storage.saveHealthcheck(dao)
    vm.responses = {}
    
    $ionicHistory.nextViewOptions({
      disableBack: true
    })
    $state.go('root.home')
  }
}

class HealthcheckDAO {
  constructor(responses) {
    this.date = new Date()
    this.responses = responses
  }
}