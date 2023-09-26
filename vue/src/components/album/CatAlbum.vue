<script setup lang="ts">
  import { onMounted } from 'vue';

  import { useCatAlbum } from 'src/composables/use-cat-album';
  import { CatImage } from 'src/requests/cat-image';

  import GridAlbum from './GridAlbum.vue';

  interface Emits {
    (e: 'clickImage', img: CatImage): void;
  }
  const emits = defineEmits<Emits>();

  const { catImagesRef, loadNextImages } = useCatAlbum();

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
