export default function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('root.healthcheck', {
        url: "/healthcheck",
        views: {
            'content@root': {
                template: require("./healthcheck.html"),
                controller: "HealthcheckController as hcCtrl"
            }
        }
    });
}
