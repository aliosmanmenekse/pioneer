import Element from './Element'
import { Colors, Types } from '../Enums/ElementEnums'

export default class Condition extends Element {
  constructor (element, Journey) {
    const ElementEvent = new Event(element.event)

    super(element.id, element.parentId, ElementEvent)
  }

  /**
	 * @return {string}
	 */
  get color () {
    return `t-c-${Colors[Types.CONDITION]}`
  }

  /**
	 * @return {string}
	 */
  get backgroundColor () {
    return `b-c-${Colors[Types.CONDITION]}`
  }

  /**
	 * @return {number}
	 */
  get getRuleId () {
    return this.element.ruleId
  }

  /**
	 * @return {number|string}
	 */
  enterStatistics () {
    return this.statistics.checkElementStatistics[this.getRuleId] || 0
  }

  /**
	 * @return {number|string}
	 */
  exitStatistics () {
    return this.statistics.checkElementStatistics.exit[this.getRuleId] || 0
  }

  /**
	 * @param {object} element
	 * @param {object} texts
	 * @param {string} texts.positiveText
	 * @param {string} texts.negativeText
	 * @param {string} texts.multipleText
	 * @return {array}
	 */
  statistics () {
    const lastChildKey = lastKey(this.children)
    let matching = 0
    let emptyStatisticsText

    const statistics = [{
      text: this.trans('journey-builder.arrived'),
      value: this.enterStatistics
    }]

    this.children.forEach((childElement, index) => {
      const childOfChild = this.children.child
      const childEnter = this.getElementEnterStatisticsWithChild(childOfChild)
      const conditionText = lastChildKey === 1
        ? positiveText
        : `${multipleText} ${index + 1}`
      const statistic = {
        text: lastChildKey === index ? negativeText : conditionText,
        value: childEnter
      }

      if (isEmpty(childOfChild)) {
        emptyStatisticsText = statistic.text
      }

      matching += childEnter
      statistics.push(statistic)
    })

    return statistics.map(statistic => {
      if (statistic.text === emptyStatisticsText) {
        statistic.value = (arrived - matching)
      }

      return statistic
    })
  }

  /**
	 * @private
	 * @return {boolean}
	 */
  _canShowSkippedStatistics () {
    return this.elementName.isAppPush ||
			this.elementName.isWebPush ||
			this.elementName.isEmail ||
			this.elementName.isSms ||
			this.elementName.isWhatsapp
  }

  /**
	 * @param {object} statistics
	 * @return {void}
	 */
  setStatistics (statistics) {
    this.statistics = statistics
  }
}
