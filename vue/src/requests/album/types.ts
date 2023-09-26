export type AlbumImage = {
  height: number;
  width: number;
  id: string;
  url: string;
};

export type GetImagesRequest = {
  limit?: number;
  page?: number;
};

export type ImageFetcher<T extends AlbumImage> = (
  params: GetImagesRequest,
) => Promise<T[]>;
