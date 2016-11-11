export default function($scope, $log, $q, $wpApiPosts, CONFIG, storage) {
  'ngInject'

  const vm = this

  $scope.$on('$ionicView.enter', init)

  function init() {
    vm.healthcheckEntries = storage.listHealthchecks()
    vm.gratitudeEntries = storage.listGratitudes() 
    vm.healthcheckEntryCount = Array.isArray(vm.healthcheckEntries) ? vm.healthcheckEntries.length : 0
    vm.healthcheckEntryLastDate = getDateOfLastEntry(vm.healthcheckEntries)
    vm.gratitudeEntryCount = Array.isArray(vm.gratitudeEntries) ? vm.gratitudeEntries.length : 0
  }

  function getDateOfLastEntry(items) {
    const latest = items[0]
    if (latest && latest.date) {
      return latest.date
    }
    return null
    
  }
  ////////// OLD ?????????????
  // var isLoadingMore = false,
  //   vm = this;
  // vm.posts = [];
  // vm.loadMore = ionic.throttle(doLoadMore, 1000);
  // vm.refresh = refresh;

  // $scope.$on('$ionicView.loaded', init);

  // function init() {
  //   vm.page = 1;
  //   vm.isPaginationOver = false;
  // }

  // function refresh() {
  //   init();
  //   vm.posts = null;
  //   vm.loadMore().finally(() => $scope.$broadcast('scroll.refreshComplete'));
  // }

  // function doLoadMore() {
  //   // prevent multiple call when the server takes some time to answer
  //   if (isLoadingMore || vm.isPaginationOver) {
  //     return $q.when(null);
  //   }
  //   isLoadingMore = true;
  //   return getPosts(vm.page).then((response) => {
  //     vm.page++;
  //     vm.posts = (vm.posts) ? vm.posts.concat(response.data) : response.data;
  //     vm.isPaginationOver = response.isPaginationOver;
  //     $scope.$broadcast('scroll.infiniteScrollComplete');
  //   }).finally(() => isLoadingMore = false);
  // }

  // function getPosts(page) {
  //   return $wpApiPosts.$getList({
  //     page: page,
  //     "filter[posts_per_page]": CONFIG.posts.posts_per_page,
  //     "filter[orderby]": CONFIG.posts.orderby,
  //     "filter[order]": CONFIG.posts.order,
  //     "filter[post_status]": CONFIG.posts.post_status
  //   }).then((response) => {
  //     // Check if we reached the last page
  //     response.isPaginationOver = (response.data.length == 0 || response.data.length < CONFIG.posts.posts_per_page);
  //     return response;
  //   });
  // }
}