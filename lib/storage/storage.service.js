export default function($log, store) {
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
    $log.info('saving:healthcheck', responses)
    const storedData = healthcheckStore.get('responses')
    if (Array.isArray(storedData)) {
      storedData.pop(responses)
      healthcheckStore.set('responses', storedData)
    }
  }
}