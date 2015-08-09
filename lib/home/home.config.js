export default /* @ngInject */ function($stateProvider, $urlRouterProvider) {
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
