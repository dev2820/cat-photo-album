import { ref, onMounted } from 'vue';
import { fetchProfile } from 'src/requests/profile';

export const useProfile = (userId) => {
  const profile = ref(null);

  onMounted(async () => {
    const data = await fetchProfile(userId);
    profile.value = data;
  });

  return {
    profile
  };
};
