<script setup></script>

<template>
  <button type="button" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<style scoped>
  button {
    border-radius: 0.75rem;
    border: none;
  }
</style>
