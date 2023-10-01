import { useEffect, useMemo, useState } from 'react';
import useSWRInfinite from 'swr/infinite';

import { fetchRepositories, type Repository } from 'src/requests/repository';

const LIMIT = 30;

export function useRepositories(userId?: string) {
  const getKey = (pageIndex: number, previousPageData: Repository[]) => {
    if (previousPageData && previousPageData.length < LIMIT) {
      return null;
    }
    return { userId, options: { page: pageIndex + 1 } };
  };

  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    getKey,
    async (args) => {
      const { userId, options } = args;
      if (!userId) return [];

      return await fetchRepositories(userId, options);
    },
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) return;
        if (error.status === 403) return;

        if (retryCount >= 5) return;

        setTimeout(() => revalidate({ retryCount }), 5000);
      }
    }
  );

  const loadNextPage = () => {
    setSize(size + 1);
  };

  const repositories = useMemo(() => {
    if (data) {
      return data.flat(1);
    }
    return [];
  }, [data]);

  const updateIsEnd = (data: Repository[][] | undefined) => {
    if (data === undefined) return;
    if (data.length < 1) return;
    if (data[data.length - 1].length === LIMIT) return;

    setIsEnd(true);
  };

  useEffect(() => {
    updateIsEnd(data);
  }, [data]);

  const [isEnd, setIsEnd] = useState<boolean>(false);

  return {
    error,
    isLoading,
    isEnd,
    repositories,
    loadNextPage
  };
}

export type { Repository } from 'src/requests/repository';
