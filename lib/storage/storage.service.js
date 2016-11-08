export default function(store) {
  'ngInject'

  const healthcheckStore = store.getNamespacedStore('healthcheck')

  return {
    saveHealthcheck: saveHealthcheck
  }

  function saveHealthcheck(responses) {
    healthcheckStore.set('responses', [responses])
    // debugger

  }
}