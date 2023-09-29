<script setup>
  defineProps({
    count: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    }
  });
</script>

<template>
  <div>
    <strong>{{ count }}</strong>
    <small>{{ label }}</small>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  small {
    font-size: 50%;
  }
</style>
