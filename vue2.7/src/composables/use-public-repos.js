import { ref } from 'vue';
import { fetchRepos } from 'src/requests/profile';

const LIMIT = 30;

export const usePublicRepos = (userId) => {
  let nextPageIndex = 1;
  const isLoading = ref(false);
  const isEndOfPage = ref(false);
  const publicRepos = ref([]);

  const fetchNextPage = async () => {
    try {
      isLoading.value = true;
      const data = await fetchRepos(userId, { page: nextPageIndex });
      publicRepos.value.push(...data);

      isEndOfPage.value = data.length < LIMIT;
      nextPageIndex++;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    publicRepos,
    isEndOfPage,
    fetchNextPage
  };
};
