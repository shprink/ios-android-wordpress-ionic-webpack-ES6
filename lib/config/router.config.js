export default /* @ngInject */ ($stateProvider) => {
    return $stateProvider.state('root', {
        abstract: true,
        views: {
            '@': {
                template: require("../views/ion-side-menus.html")
            },
            'menu@root': {
                template: require("../menu/menu.html")
            }
        }
    });
}
