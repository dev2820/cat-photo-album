<script setup lang="ts">
  import { onMounted } from 'vue';

  import { useDogAlbum } from 'src/composables/use-dog-album';
  import type { AlbumImage } from 'src/requests/album';

  import GridAlbum from './GridAlbum.vue';

  interface Emits {
    (e: 'clickImage', img: AlbumImage): void;
  }
  const emits = defineEmits<Emits>();

  const { imagesRef: dogImagesRef, loadNextImages } = useDogAlbum();

  const onClickImage = (imgIndex: number) => {
    emits('clickImage', dogImagesRef.value[imgIndex]);
  };

  onMounted(() => {
    loadNextImages();
  });
</script>

<template>
  <GridAlbum
    :images="dogImagesRef"
    @load-next-images="loadNextImages"
    @click-image="onClickImage"
  ></GridAlbum>
</template>

<style scoped></style>
