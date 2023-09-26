import { ref } from 'vue';

import type { AlbumImage } from 'src/requests/album';
import { getDogImages } from 'src/requests/album';

export const useDogAlbum = () => {
  let pageIndex = 0;
  const dogImagesRef = ref<AlbumImage[]>([]);

  const loadNextImages = async () => {
    const nextPage = await getDogImages({ limit: 30, page: pageIndex });
    dogImagesRef.value.push(...nextPage);

    pageIndex++;
  };

  return {
    dogImagesRef,
    loadNextImages,
  };
};
