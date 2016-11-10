export default {
  // '<'' defines a two way binding in and out of the component
  bindings: {
    ngModel: '=',
    name: '<'
  },
  templateUrl: 'lib/healthcheck/components/amount-response.html',
  controller: function () {
    this.foo = 'bar'
  }
}
