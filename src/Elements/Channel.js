import Element from './Element'
import ElementName from '../ValueObjects/ElementName'
import { Colors, Types } from '../Enums/ElementEnums'

export default class Channel extends Element {
  constructor (element) {
    const ElementEvent = new Event(element.event)

    super(element.id, element.parentId, ElementEvent)

    this.elementName = new ElementName(element.event)
    this.statistics = {}
  }

  /**
	 * @return {string}
	 */
  get color () {
    return `t-c-${Colors[Types.CHANNEL]}`
  }

  /**
	 * @return {string}
	 */
  get backgroundColor () {
    return `b-c-${Colors[Types.CHANNEL]}`
  }

  /**
	 * @return {number}
	 */
  get variationId () {
    return this.element.personalization.builder_camp[0].variationId
  }

  /**
	 * @return {number|string}
	 */
  enterStatistics () {
    return this.statistics.productElementStatistics.enter[this.variationId] || 0
  }

  /**
	 * @return {number|string}
	 */
  exitStatistics () {
    return this.statistics.productElementStatistics.exit[this.variationId] || 0
  }

  /**
	 * @return {number}
	 */
  couponProceed () {
    return this.statistics.couponProceedStatistics[this.variationId] || 0
  }

  /**
	 * @return {array<object>}
	 */
  get statistics () {
    const exitText = this.elementName.isCallApi || this.elementName.isGoogleAds ? 'Processed' : 'Reachable'

    const statistics = [
      { text: 'Arrived', value: this.enterStatistics },
      { text: exitText, value: this.exitStatistics }
    ]

    if (this._canShowSkippedStatistics) {
      statistics.push({ text: 'Skipped', value: this.couponProceed })
    }

    return statistics
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
