export default function($log, store) {
  'ngInject'

  const stores = {
    healthcheck: store.getNamespacedStore('healthcheck')
  }

  return {
    saveHealthcheck: saveHealthcheck,
    listHealthchecks: listHealthchecks
  }

  // returns ARRAY
  function listHealthchecks() {
    return stores.healthcheck.get('entries') || []
  }

  function saveHealthcheck(responses) {
    $log.info('saving-healthcheck', responses)
    const payload = listHealthchecks() || []
    if (Array.isArray(payload)) {
      payload.unshift(responses)
      stores.healthcheck.set('entries', payload)
    } else {
      $log.error('saving-healthcheck:failed')
    }
  }
}