<script setup lang='ts'>
import { toRefs } from "vue";

interface Props {
  size: number,
  strokeWidth: number
}
const props = withDefaults(defineProps<Props>(),{
  size: 100,
  strokeWidth: 1
})

const { size,strokeWidth } = toRefs(props)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="gradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >
        <stop
          offset="0%"
          style="stop-color:#f06"
        />
        <stop
          offset="100%"
          style="stop-color:#9f6"
        />
      </linearGradient>
    </defs>
    <circle
      :cx="size/2"
      :cy="size/2"
      :r="size/2-strokeWidth"
      stroke="url(#gradient)"
      :stroke-width="strokeWidth"
      fill="none"
    />
  </svg>
</template>

<style scoped>
</style>