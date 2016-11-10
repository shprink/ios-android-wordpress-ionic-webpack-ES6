export default function($scope, $log, $q, QUESTIONS_CONFIG, storage) {
  'ngInject'

  const vm = this
  vm.questions = QUESTIONS_CONFIG
  vm.responses = {}
  vm.submitHealthcheck = submitHealthcheck

  // TODO remove
  vm.saved = storage.listHealthchecks()

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