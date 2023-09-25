<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  import { useAlbum } from 'src/composables/album';

  const $endOfAlbum = ref();
  const { albumRef, loadNextPage } = useAlbum();
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      loadNextPage();
    }
  });
  const observeEndOfAlbum = () => {
    observer.observe($endOfAlbum.value);
  };

  onMounted(() => {
    observeEndOfAlbum();
    loadNextPage();
  });
</script>

<template>
  <ul ref="$album">
    <li v-for="(image, index) in albumRef" :key="index" class="item">
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
