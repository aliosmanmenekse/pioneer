<template>
  <div id="app">
      <Canvas></Canvas>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Canvas from './Views/Canvas.vue'

export default {
  components: {
    Canvas
  },

  mounted () {
    this.getUserAndPartnerSettings()
  },

  methods: {
    ...mapActions([
      'getUserAndPartnerSettings'
    ])
  }
}
</script>
