<script setup lang="ts">
  import { onMounted } from 'vue';

  import { useCatAlbum } from 'src/composables/use-cat-album';
  import type { AlbumImage } from 'src/requests/album';

  import GridAlbum from './GridAlbum.vue';

  interface Emits {
    (e: 'clickImage', img: AlbumImage): void;
  }
  const emits = defineEmits<Emits>();

  const { imagesRef: catImagesRef, loadNextImages } = useCatAlbum();

  const onClickImage = (imgIndex: number) => {
    emits('clickImage', catImagesRef.value[imgIndex]);
  };

  onMounted(() => {
    loadNextImages();
  });
</script>

<template>
  <GridAlbum
    :images="catImagesRef"
    @load-next-images="loadNextImages"
    @click-image="onClickImage"
  ></GridAlbum>
</template>

<style scoped></style>
