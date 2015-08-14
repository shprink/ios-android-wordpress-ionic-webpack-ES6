export default function($stateProvider) {
    'ngInject';
    $stateProvider.decorator('views', (state, parent) => {
        let views = parent(state);
        if (state.name === 'root') {
            views['menu@root'] = {
                template: require("./menu.html")
            };
        }
        return views;
    });
}
