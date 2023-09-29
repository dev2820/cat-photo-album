<script setup>
  defineProps({
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  });
</script>

<template>
  <span :aria-label="text">
    <v-icon :name="icon" :size="24" class="icon"></v-icon>
    {{ text }}
  </span>
</template>

<style scoped>
  .icon {
    margin-right: 0.25rem;
  }
</style>
