import { Icons } from '../Enums/ElementEnums'

export default class Element {
  /**
   * @param {number} id
   * @param {number} parentId
   * @param {Event} Event
   */
  constructor (id, parentId, Event) {
    this._id = id
    this._parentId = parentId
    this._event = Event
  }

  get id () {
    return this._id
  }

  get parentId () {
    return this._parentId
  }

  get name () {
    return this._event.name
  }

  get event () {
    return this._event
  }

  get icon () {
    return Icons[this._event.name]
  }

  get children () {
    return []
  }
}
