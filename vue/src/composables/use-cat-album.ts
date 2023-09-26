import { useAlbum } from 'src/composables/use-album';
import { getCatImages } from 'src/requests/album';

export const useCatAlbum = () => {
  const { imagesRef, loadNextImages } = useAlbum(getCatImages);

  return {
    imagesRef,
    loadNextImages,
  };
};
