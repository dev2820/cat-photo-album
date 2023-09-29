<script setup>
  import { paths } from './pathStore';
  import { computed } from 'vue';

  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 24
    }
  });

  const sizePx = computed(() => `${props.size}px`);
  const svgPath = paths.pathToIcon;
  const iconPath = `${svgPath}#${props.name}`;
</script>

<template>
  <span>
    <svg :width="size" :height="size">
      <use :xlink:href="iconPath"></use>
    </svg>
  </span>
</template>

<style scoped>
  span {
    display: inline-block;
    vertical-align: top;
    width: v-bind(sizePx);
    height: v-bind(sizePx);
  }
</style>
