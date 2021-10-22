export default class Event {
  /**
   * @param {number} id
   * @param {string} type
   * @param {string} name
   */
  constructor (id, type, name) {
    this._id = id
    this._type = type
    this._name = name
  }

  get id () {
    return this._id
  }

  get type () {
    return this._type
  }

  get name () {
    return this._name
  }
}
