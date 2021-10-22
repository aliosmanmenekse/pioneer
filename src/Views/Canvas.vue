<template>
  <Canvas :elements="elements"></Canvas>
</template>

<script>
import ApiService from '../Services/ApiService'
import JourneyFactory from '../Factories/JourneyFactory'
import Canvas from '../Components/Canvas.vue'

export default {
  components: {
    Canvas
  },

  destroyed () {
    clearInterval(this.elementStatisticsInterval)
  },

  async beforeMount () {
    await this.getElements()
    this.startLiveStatistics()
  },

  data () {
    return {
      elementStatisticsInterval: {},
      elements: {}
    }
  },

  methods: {
    /**
     * @return {Promise<void>}
     */
    async getElements () {
      const elements = await ApiService.fetchElements()
      const journeyFactory = new JourneyFactory()

      Object.values(elements).forEach((element) => {
        const elementService = journeyFactory.createElement(element, element.event)

        this.$set(this.elements, element.state, elementService)
      })
    },

    /**
     * @return {Promise<void>}
     */
    async startLiveStatistics () {
      const statistics = await ApiService.getElementStatistics()

      statistics.forEach((statistic) => {
        this.elements[statistic.elementId].setStatistics(statistic)
      })
    }
  }
}
</script>
