<script setup>
  defineProps({
    label: {
      type: String,
      required: true
    }
  });
</script>
<template>
  <section :aria-labelledby="label">
    <h3 :id="label">{{ label }}</h3>
    <slot></slot>
  </section>
</template>

<style scoped>
  h3 {
    display: none;
  }
</style>
