<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  import type { CatImage } from 'src/requests/cat-image';

  interface Props {
    images: CatImage[];
  }
  interface Emits {
    (e: 'loadNextImages'): void;
  }

  const emit = defineEmits<Emits>();
  withDefaults(defineProps<Props>(), {
    images: () => [],
  });

  const $endOfAlbum = ref();
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      emit('loadNextImages');
    }
  });

  const observeEndOfAlbum = () => {
    observer.observe($endOfAlbum.value);
  };

  onMounted(() => {
    observeEndOfAlbum();
  });
</script>

<template>
  <ul ref="$album">
    <li v-for="(image, index) in images" :key="index" class="item">
      <img :src="image.url" />
    </li>
    <li ref="$endOfAlbum"></li>
  </ul>
</template>

<style scoped>
  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    box-sizing: content-box;
    gap: 4px;
  }
  li {
    list-style: none;
    height: 152px;
    aspect-ratio: 1/1;
  }
  img {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
</style>
