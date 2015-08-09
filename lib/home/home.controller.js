export default /* @ngInject */ function($scope, $log, $q, $wpApiPosts, CONFIG) {
    var isLoadingMore = false,
        vm = this;
    vm.posts = [];
    vm.loadMore = ionic.throttle(doLoadMore, 1000);
    vm.doRefresh = doRefresh;

    $scope.$on('$ionicView.loaded', init);

    function init() {
        vm.page = 1;
        vm.isPaginationOver = false;
    }

    function doRefresh() {
        init();
        vm.posts = null;
        vm.loadMore().finally(() => $scope.$broadcast('scroll.refreshComplete'));
    }

    function doLoadMore() {
        // prevent multiple call when the server takes some time to answer
        if (isLoadingMore || vm.isPaginationOver) {
            return $q.when(null);
        }
        isLoadingMore = true;
        return getPosts(vm.page).then((response) => {
            vm.page++;
            vm.posts = (vm.posts) ? vm.posts.concat(response.data) : response.data;
            vm.isPaginationOver = response.isPaginationOver;
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }).finally(() => isLoadingMore = false);
    }

    function getPosts(page) {
        return $wpApiPosts.$getList({
            page: page,
            "filter[posts_per_page]": CONFIG.posts.posts_per_page,
            "filter[orderby]": CONFIG.posts.orderby,
            "filter[order]": CONFIG.posts.order,
            "filter[post_status]": CONFIG.posts.post_status
        }).then((response) => {
            // Check if we reached the last page
            response.isPaginationOver = (response.data.length == 0 || response.data.length < CONFIG.posts.posts_per_page);
            return response;
        });
    }
}
