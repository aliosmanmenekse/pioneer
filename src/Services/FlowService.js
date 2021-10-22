export default class FlowService {
  /**
   * @param {object} elementList
   * @param {Element} element
   */
  constructor (elementList, element) {
    this.elementList = elementList
    this.element = element
  }

  /**
   * @return {array}
   */
  getAllElementWithName () {
    return Object.values(this.elementList)
      .filter((element) => element.name === this.element.name)
  }
}
