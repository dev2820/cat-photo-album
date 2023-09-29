<script setup>
  defineProps({
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  });
</script>
<template>
  <img v-bind="$props" />
</template>

<style scoped></style>
