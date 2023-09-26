<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  import type { CatImage } from 'src/requests/cat-image';
  import { toNumber } from 'src/utils/type';

  interface Props {
    images: CatImage[];
  }
  interface Emits {
    (e: 'loadNextImages'): void;
    (e: 'clickImage', index: number): void;
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

  const onClickImage = (e: MouseEvent) => {
    const $target = e.target as HTMLElement;
    const $li = $target.closest('li');

    if (!$li) return;

    const imageIndex = toNumber($li.dataset['index']);
    emit('clickImage', imageIndex);
  };

  onMounted(() => {
    observeEndOfAlbum();
  });
</script>

<template>
  <ul ref="$album" @click="onClickImage">
    <li
      v-for="(image, index) in images"
      :key="index"
      :data-index="index"
      class="item"
    >
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
    gap: 3px;
  }
  li {
    list-style: none;
    aspect-ratio: 1/1;
    cursor: pointer;
    overflow: hidden;
  }
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    transition: 0.2s;
  }
  img:hover {
    transform: scale(1.2);
    filter: brightness(0.6);
  }
</style>
