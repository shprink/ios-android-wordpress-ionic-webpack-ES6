export default function($scope, $log, $q, QUESTIONS_CONFIG, storage) {
  'ngInject'

  const vm = this
  vm.questions = QUESTIONS_CONFIG
  vm.responses = {}
  vm.submitHealthcheck = submitHealthcheck

  function submitHealthcheck(form) {
    $log.info('form', form)

    const dao = new ResponsesDAO(vm.responses)
    storage.saveHealthcheck(dao)
    $log.info(storage)
  }
}

class ResponsesDAO {
  constructor(responses) {
    this.data = responses
    this.date = new Date()
  }
}