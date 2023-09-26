import { ref } from 'vue';

import type { AlbumImage, ImageFetcher } from 'src/requests/album';

export const useAlbum = (imageFetcher: ImageFetcher<AlbumImage>) => {
  let pageIndex = 0;
  const imagesRef = ref<AlbumImage[]>([]);

  const loadNextImages = async () => {
    const nextPage = await imageFetcher({ limit: 30, page: pageIndex });
    imagesRef.value.push(...nextPage);

    pageIndex++;
  };

  return {
    imagesRef,
    loadNextImages,
  };
};
