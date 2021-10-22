import { Names } from '../Enums/ElementEnums'

export default class ElementName {
  constructor (event) {
    this.event = event
  }

  /**
	 * @return {boolean}
	 */
  isCallApi () {
    return this.event.name === Names.CALL_API
  }

  /**
	 * @return {boolean}
	 */
  isGoogleAds () {
    return this.event.name === Names.GOOGLE_ADS
  }

  /**
	 * @return {boolean}
	 */
  isAppPush () {
    return this.event.name === Names.APP_PUSH
  }

  /**
	 * @return {boolean}
	 */
  isWebPush () {
    return this.event.name === Names.WEB_PUSH
  }

  /**
	 * @return {boolean}
	 */
  isEmail () {
    return this.event.name === Names.EMAIL
  }

  /**
	 * @return {boolean}
	 */
  isSms () {
    return this.event.name === Names.SMS
  }

  /**
	 * @return {boolean}
	 */
  isWhatsapp () {
    return this.event.name === Names.WHATSAPP
  }
}
