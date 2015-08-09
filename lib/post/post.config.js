export default /* @ngInject */ function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('root.post', {
        url: "/post/:id",
        views: {
            'content': {
                template: require("./post.html"),
                controller: "PostController as postCtrl"
            }
        }
    });
}
