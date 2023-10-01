import { useEffect, useState } from 'react';
import { fetchProfile, type Profile } from 'src/requests/profile';

export type { Profile } from 'src/requests/profile';

export function useProfile(userId: string) {
  const [profile, setProfile] = useState<Profile | undefined>();

  async function updateProfile(userId: string) {
    const response = await fetchProfile(userId);
    if (response.dataExist) {
      setProfile(response.data);
    }
  }

  useEffect(() => {
    updateProfile(userId);
  }, [userId]);

  return {
    profile,
    updateProfile
  };
}
