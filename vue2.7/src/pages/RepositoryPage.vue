<script setup>
  import { ref, onUnmounted, onMounted } from 'vue';
  import { usePublicRepos } from 'src/composables/use-public-repos';
  import VSection from 'src/components/atoms/VSection.vue';

  const username = 'dev2820';
  const { publicRepos, fetchNextPage, isEndOfPage, isLoading } = usePublicRepos(username);
  const $fetchTrigger = ref(null);
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    if (isLoading.value) return;

    fetchNextPage();
  });

  onMounted(() => {
    if (!$fetchTrigger.value) return;

    observer.observe($fetchTrigger.value);
  });

  onUnmounted(() => {
    observer.unobserve($fetchTrigger.value);
  });
</script>

<template>
  <main>
    <v-section label="repositories">
      <ul>
        <li v-for="repo in publicRepos" :key="repo.id">
          {{ repo.name }}
        </li>
        <li v-if="!isEndOfPage" ref="$fetchTrigger" aria-hidden></li>
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
</style>
