<template>
  <div>
    <div
      v-for="(element, index) in elements"
      :key="index"
      class="element-name">
      <b>{{ element.name }}</b>
      <p
          v-for="(stat, key) in element.statistics"
          :key="key">
        {{ stat.text }} => {{ stat.value }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    elements: {
      type: Object,
      required: true
    }
  }
}
</script>
