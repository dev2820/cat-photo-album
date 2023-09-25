import { onMounted, shallowRef } from 'vue';

import type { Profile } from 'src/requests/profile';
import { defaultProfile, getProfile } from 'src/requests/profile';

export const useProfile = (username: string) => {
  const profileRef = shallowRef<Profile>(defaultProfile);

  const fetchProfile = async () => {
    profileRef.value = await getProfile(username);
  };

  onMounted(() => {
    fetchProfile();
  });

  return {
    fetchProfile,
    profileRef,
  };
};
