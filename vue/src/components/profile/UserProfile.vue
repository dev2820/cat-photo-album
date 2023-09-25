<script setup lang="ts">
  import { toRefs } from 'vue';

  import { defaultProfile, type Profile } from 'src/requests/profile';

  interface Props {
    profile: Profile;
  }

  const props = withDefaults(defineProps<Props>(), {
    profile: () => defaultProfile,
  });

  const { profile: profileRef } = toRefs(props);
</script>

<template>
  <strong>{{ profileRef.name }}</strong>
  <p class="text-week">{{ profileRef.location }}</p>
  <p>{{ profileRef.bio }}</p>
  <a :href="profileRef.githubUrl" target="_blank">Link to Github</a>
</template>

<style scoped>
  .text-week {
    opacity: 0.75;
  }
</style>
