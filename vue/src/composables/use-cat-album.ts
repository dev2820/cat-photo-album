import { ref } from 'vue';

import type { AlbumImage } from 'src/requests/album';
import { getCatImages } from 'src/requests/album';

export const useCatAlbum = () => {
  let pageIndex = 0;
  const catImagesRef = ref<AlbumImage[]>([]);

  const loadNextImages = async () => {
    const nextPage = await getCatImages({ limit: 30, page: pageIndex });
    catImagesRef.value.push(...nextPage);

    pageIndex++;
  };

  return {
    catImagesRef,
    loadNextImages,
  };
};
