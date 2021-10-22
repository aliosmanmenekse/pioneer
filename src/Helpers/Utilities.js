/**
 * @param {object} object
 */
export function cloneObject (object = {}) {
  return JSON.parse(JSON.stringify(object))
}

/**
 * @param {array} arr
 * @return {number}
 */
export function lastKey (arr) {
  return arr.length - 1
}
