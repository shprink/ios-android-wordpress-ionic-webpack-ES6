export default function($scope, $state, $ionicHistory, $log, $q, QUESTIONS_CONFIG, storage) {
  'ngInject'

  const vm = this
  vm.questions = QUESTIONS_CONFIG
  vm.responses = {}
  vm.submitHealthcheck = submitHealthcheck
  // actions
  vm.start = start
  vm.startCondition = startCondition

  // TODO remove
  vm.saved = storage.listHealthchecks()

  function startCondition() {
    return true
    // return angular.isDefined(vm.step3 && vm.step3.something)
  }

  function start() {
    // save whatever data we need and then redirect to main app
    // persistWizardData();
    debugger
    $ionicHistory.nextViewOptions({
      disableBack: true
    })
    $state.go('root.home')
  }

  function submitHealthcheck(form) {
    $log.info('form', form)

    const dao = new ResponsesDAO(vm.responses)
    storage.saveHealthcheck(dao)
    vm.responses = {}
    $log.info(storage)
  }
}

class ResponsesDAO {
  constructor(responses) {
    this.data = responses
    this.date = new Date()
  }
}