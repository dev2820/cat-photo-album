<script setup lang="ts">
  import { ref } from 'vue';

  import { randomInt } from 'src/utils/number';
  import { toHex } from 'src/utils/string';

  interface Props {
    alt?: string;
    src: string;
  }
  withDefaults(defineProps<Props>(), {
    alt: '',
  });
  const $container = ref();
  const getRandomColor = () => {
    const r = toHex(randomInt(0, 255));
    const g = toHex(randomInt(0, 255));
    const b = toHex(randomInt(0, 255));
    return `#${r}${g}${b}`;
  };
  const isLoadingRef = ref(true);
  const onLoadImage = () => {
    isLoadingRef.value = false;
  };
</script>

<template>
  <div
    ref="$container"
    :class="{ isLoading: isLoadingRef }"
    :style="{ background: getRandomColor() }"
  >
    <img :src="src" :alt="alt" @load="onLoadImage" />
  </div>
</template>

<style scoped>
  div.isLoading {
    position: relative;
    background: gray;
    animation: skeleton 3s infinite;
  }
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    transition: 0.2s;
    position: relative;
    opacity: 1;
  }
  img.isLoading {
    opacity: 0;
  }
  @keyframes skeleton {
    0% {
      filter: brightness(0.5);
    }
    50% {
      filter: brightness(1);
    }
    100% {
      filter: brightness(0.5);
    }
  }
</style>
