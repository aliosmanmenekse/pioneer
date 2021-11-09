import Channel from '../Elements/Channel'
import Condition from '../Elements/Condition'
import { Types } from '../Enums/ElementEnums'

export default class JourneyFactory {
  createElement (element, event) {
    if (Types.CHANNEL === event.type) {
      return new Channel(element)
    }

    if (Types.CONDITION === event.type) {
      return new Condition(element)
    }

    return new Condition(element);
  }
}
