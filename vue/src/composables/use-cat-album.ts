import { ref } from 'vue';

import type { CatImage } from 'src/requests/cat-image';
import { getImages } from 'src/requests/cat-image';

export const useCatAlbum = () => {
  let pageIndex = 0;
  const catImagesRef = ref<CatImage[]>([]);

  const loadNextImages = async () => {
    const nextPage = await getImages({ limit: 30, page: pageIndex });
    catImagesRef.value.push(...nextPage);

    pageIndex++;
  };

  return {
    catImagesRef,
    loadNextImages,
  };
};
