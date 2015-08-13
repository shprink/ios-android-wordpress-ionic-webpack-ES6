export default function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('root.home', {
        url: "/home",
        views: {
            'content': {
                template: require("./home.html"),
                controller: "HomeController as homeCtrl"
            }
        }
    });
    $urlRouterProvider.otherwise("/home");
}
