export default function($stateProvider, $urlRouterProvider) {
    'ngInject';
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
