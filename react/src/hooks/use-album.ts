import type { AlbumImage, ImageFetcher } from "src/requests/album";
import { useState } from "react";

export type UseAlbum = (imageFetcher: ImageFetcher<AlbumImage>) => {
  images: AlbumImage[],
  loadNextImages: ()=>Promise<void>
}
export const useAlbum:UseAlbum = (imageFetcher) => {
  let pageIndex = 0;
  const [images, setImages] = useState<AlbumImage[]>([]);

  const loadNextImages = async () => {
    const nextPage = await imageFetcher({ limit: 30, page: pageIndex });
    setImages((images)=>{
      return [...images, ...nextPage]
    })

    pageIndex++;
  };

  return {
    images,
    loadNextImages,
  };
}