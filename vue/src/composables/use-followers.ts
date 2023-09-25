import { shallowRef } from 'vue';

import type { Follower } from 'src/requests/profile';
import { getFollowers } from 'src/requests/profile';

export const useFollowers = (username: string) => {
  const followersRef = shallowRef<Follower[]>([]);

  const fetchFollowers = async () => {
    followersRef.value = await getFollowers(username);
  };

  return {
    fetchFollowers,
    followersRef,
  };
};
