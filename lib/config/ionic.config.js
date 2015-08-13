export default function(CONFIG, $ionicConfigProvider) {
    'ngInject';
    $ionicConfigProvider.views.maxCache(CONFIG.cache.views || 10);
    $ionicConfigProvider.views.forwardCache(CONFIG.cache.forward || false);
    $ionicConfigProvider.scrolling.jsScrolling(false);
}
