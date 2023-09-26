import type { AlbumImage } from './types';

const API_KEY = import.meta.env.VITE_CAT_API_KEY;

type GetImagesRequest = {
  limit?: number;
  page?: number;
};

export const getCatImages = async ({
  limit = 10,
  page = 0,
}: GetImagesRequest): Promise<AlbumImage[]> => {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`,
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
