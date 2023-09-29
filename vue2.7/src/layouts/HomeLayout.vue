<script setup></script>
<template>
  <main id="app">
    <slot></slot>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
</style>
