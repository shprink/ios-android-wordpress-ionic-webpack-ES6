export default /* @ngInject */ (CONFIG, WpApiProvider) => {
    console.log(CONFIG)
    var RestangularProvider = WpApiProvider.getRestangularProvider();
    RestangularProvider.setDefaultHttpFields({
        timeout: CONFIG.api.timeout || 5000
    });
    RestangularProvider.setBaseUrl(CONFIG.api.baseUrl || null);
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setRestangularFields({
        id: "ID"
    });
}
