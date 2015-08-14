export default function($stateProvider) {
    'ngInject';
    $stateProvider.state('root.post', {
        url: "/post/:id",
        views: {
            'content@root': {
                template: require("./post.html"),
                controller: "PostController as postCtrl"
            }
        }
    });
}
