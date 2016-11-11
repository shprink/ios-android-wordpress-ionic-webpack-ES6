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

    if (vm.responses.FEELINGS) {
      const healthcheckModel = new DataRecordModel(vm.responses.FEELINGS)
      storage.saveHealthcheck(healthcheckModel)  
    }
    
    if (vm.responses.GRATITUDES) {
      const gratitudesModel = new DataRecordModel(vm.responses.GRATITUDES)
      storage.saveGratitudes(gratitudesModel)
    }
    
    vm.responses = {}
    
    $ionicHistory.nextViewOptions({
      disableBack: true
    })
    $state.go('root.home')
  }
}

class DataRecordModel {
  constructor(responses) {
    this.date = new Date()
    this.responses = responses
  }
}