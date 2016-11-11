import template from './amount-response.html'

export default {
  // '<'' defines a two way binding in and out of the component
  bindings: {
    ngModel: '=',
    name: '<'
  },
  template,
  controller: function () {
    this.foo = 'bar'
  }
}
