<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    name: string;
    namespace?: string;
    width?: number;
    height?: number;
  }

  const props = withDefaults(defineProps<Props>(), {
    width: 24,
    height: 24,
    namespace: 'icons',
  });

  const iconPath = computed(() => {
    return `./${props.namespace}.svg#${props.name}`;
  });
</script>

<template>
  <svg :width="width" :height="height">
    <use :xlink:href="iconPath"></use>
  </svg>
</template>

<style scoped></style>
