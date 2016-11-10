export default function(store) {
  'ngInject'

  const healthcheckStore = store.getNamespacedStore('healthcheck')

  return {
    saveHealthcheck: saveHealthcheck,
    listHealthchecks: listHealthchecks
  }

  function listHealthchecks() {
    return healthcheckStore.get('responses')
  }

  function saveHealthcheck(responses) {
    // append responses
    const storedData = healthcheckStore.get('responses')
    if (Array.isArray(storedData)) {
      storedData.push(responses)
      healthcheckStore.set('responses', storedData)
    }
  }
}