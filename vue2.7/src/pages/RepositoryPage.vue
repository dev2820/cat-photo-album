<script setup>
  import { ref, onUnmounted, onMounted } from 'vue';
  import { usePublicRepos } from 'src/composables/use-public-repos';
  import VSection from 'src/components/atoms/VSection.vue';
  import router from 'src/router';

  const username = router.currentRoute.params.user;
  const { publicRepos, fetchNextPage, isEndOfPage, isLoading } = usePublicRepos(username);
  const $fetchTrigger = ref(null);
  const observer = new IntersectionObserver(([entry]) => {
    console.log(isLoading.value, entry.isIntersecting);
    if (!entry.isIntersecting) return;
    if (isLoading.value) return;

    fetchNextPage();
  });

  onMounted(() => {
    if (!$fetchTrigger.value) return;

    observer.observe($fetchTrigger.value);
  });

  onUnmounted(() => {
    observer.disconnect();
  });
</script>

<template>
  <main>
    <v-section label="repositories">
      <ul>
        <li v-for="repo in publicRepos" :key="repo.id">
          {{ repo.name }}
        </li>
        <li id="fetch-trigger" v-if="!isEndOfPage" ref="$fetchTrigger" aria-hidden></li>
      </ul>
    </v-section>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  #avatar {
    border-radius: 9999px;
    margin: 1rem 0;
  }

  h2 {
    margin: 1rem 0;
  }

  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #meta {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  #fetch-trigger {
    display: block;
    height: 240px;
  }
</style>
