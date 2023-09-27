import type { AlbumImage, ImageFetcher } from './types';

const API_KEY = import.meta.env.VITE_CAT_API_KEY;

export const getDogImages: ImageFetcher<AlbumImage> = async ({
  limit = 10,
  page = 0,
}) => {
  const res = await fetch(
    `https://api.thedogapi.com/v1/images/search?limit=${limit}&page=${page}`,
    {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    },
  );
  const images = await res.json();

  return images;
};
