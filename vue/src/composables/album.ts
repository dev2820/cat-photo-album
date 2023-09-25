import { ref } from 'vue';

import type { Image } from 'src/requests/cat-image';
import { getImages } from 'src/requests/cat-image';

export const useAlbum = () => {
  let pageIndex = 0;
  const albumRef = ref<Image[]>([]);

  const loadNextPage = async () => {
    const nextPage = await getImages({ limit: 30, page: pageIndex });
    albumRef.value.push(...nextPage);

    pageIndex++;
  };

  return {
    albumRef,
    loadNextPage,
  };
};
