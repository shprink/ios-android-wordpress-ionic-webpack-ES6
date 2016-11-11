export default function($log, store) {
  'ngInject'

  const stores = {
    records: store.getNamespacedStore('records')
  }

  return {
    saveHealthcheck: saveHealthcheck,
    listHealthchecks: listHealthchecks,
    saveGratitudes: saveGratitudes,
    listGratitudes: listGratitudes
  }

  /**
  * @return {Array}
  */
  function listHealthchecks() {
    return stores.records.get('healthcheck') || []
  }

  function saveHealthcheck(responses) {
    $log.info('saving-records', responses)
    const payload = listHealthchecks() || []
    if (Array.isArray(payload)) {
      payload.unshift(responses)
      stores.records.set('healthcheck', payload)
    } else {
      $log.error('saving-records:failed')
    }
  }

  /**
  * @return {Array}
  */
  function listGratitudes() {
    return stores.records.get('gratitudes') || []
  }

  function saveGratitudes(responses) {
    $log.info('saving-records', responses)
    const payload = listHealthchecks() || []
    if (Array.isArray(payload)) {
      payload.unshift(responses)
      stores.records.set('gratitudes', payload)
    } else {
      $log.error('saving-records:failed')
    }
  }
}