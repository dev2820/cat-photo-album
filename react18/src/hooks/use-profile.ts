import useSWR from 'swr';

import { fetchProfile } from 'src/requests/profile';

export type { Profile } from 'src/requests/profile';

export function useProfile(userId: string) {
  const { data, error, isLoading } = useSWR(userId, fetchProfile, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (error.status === 403) return;
      if (retryCount >= 5) return;

      setTimeout(() => revalidate({ retryCount }), 5000);
    }
  });

  return {
    profile: data,
    isLoading,
    error
  };
}
