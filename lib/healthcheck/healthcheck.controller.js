export default function($scope, $log, $q, QUESTIONS_CONFIG) {
    'ngInject';

    const vm = this;

    vm.questions = QUESTIONS_CONFIG;
}
