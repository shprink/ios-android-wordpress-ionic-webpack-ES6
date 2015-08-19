export default function ($scope, $log, $wpApiPosts, $stateParams) {
    'ngInject';
    var vm = this;
    vm.post = null;
    $scope.$on('$ionicView.loaded', init);

    function init() {
        $wpApiPosts.$get($stateParams.id).then((response) => {
            vm.post = response.data;
        });
    }
}
