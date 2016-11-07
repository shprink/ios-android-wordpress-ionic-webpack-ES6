export default function($scope, $log, $q, QUESTIONS_CONFIG) {
    'ngInject'

    const vm = this

    vm.questions = QUESTIONS_CONFIG

    vm.responses = {}

    vm.submitHealthcheck = submitHealthcheck

    function submitHealthcheck(form) {
    	console.log(form, vm.responses)
    }
}
