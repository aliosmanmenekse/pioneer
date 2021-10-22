<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
