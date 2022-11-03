import { get } from 'axios'
const protocol = 'https://'
const host = 'www.lacia.com/'
/**
 * Stream list.
 * GET – /challenge/moves.json
 * @returns {Promise}
 */
function getApiStream () {
  const resource = '/challenge/moves.json'
  const API_URL = `${protocol}${host}${resource}`
  return get(API_URL)
}
export {
  getApiStream
}
