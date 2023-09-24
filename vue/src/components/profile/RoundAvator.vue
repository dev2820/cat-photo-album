<script setup lang='ts'>
import { toRefs } from "vue";

import GradientDonut from "./GradientDonut.vue";

interface Props {
  imgUrl: string;
  size: number;
  alt?: string;
}

const props = withDefaults(defineProps<Props>(),{
  imgUrl: '',
  size: 100,
  alt: ''
})

const { alt, size, imgUrl } = toRefs(props)
const strokeWidth = 3;
const imageSize = size.value - 24;
</script>

<template>
  <div :style="{ width: size+'px', height: size+'px'}">
    <GradientDonut
      class="gradient-circle"
      :size="size"
      :stroke-width="strokeWidth"
    />
    <img
      :src="imgUrl"
      :width="imageSize"
      :height="imageSize"
      :alt="alt"
    >
  </div>
</template>


<style scoped>
div {
  position:relative;
  width:fit-content;
  height: fit-content;
}
.gradient-circle {
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
}
img {
  border-radius:9999px;
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
}
</style>