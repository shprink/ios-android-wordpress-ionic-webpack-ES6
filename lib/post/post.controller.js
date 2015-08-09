export default /* @ngInject */ function($scope, $log, $q, $wpApiPosts, CONFIG, $stateParams) {
    var vm = this;
    vm.post = null;
    $scope.$on('$ionicView.loaded', init);

    function init() {
        $wpApiPosts.$get($stateParams.id).then((response) => {
            vm.post = response.data;
        });
    }
}
