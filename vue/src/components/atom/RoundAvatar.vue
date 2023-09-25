<script setup lang="ts">
  interface Props {
    imgUrl: string;
    size: number;
    alt?: string;
  }
  withDefaults(defineProps<Props>(), {
    imgUrl: '',
    size: 0,
    alt: '',
  });
</script>

<template>
  <img :src="imgUrl" :height="size" :width="size" :alt="alt" />
</template>

<style scoped>
  img {
    border-radius: 9999px;
    border: 2px solid white;
  }
</style>
