import { useAlbum } from 'src/composables/use-album';
import { getDogImages } from 'src/requests/album';

export const useDogAlbum = () => {
  const { imagesRef, loadNextImages } = useAlbum(getDogImages);

  return {
    imagesRef,
    loadNextImages,
  };
};
