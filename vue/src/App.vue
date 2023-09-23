<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getProfile, type Profile } from "src/requests/profile";

const username = "dev2820";
const profileRef = ref<Profile | null>(null);

const fetchProfile = async () => {
  profileRef.value = await getProfile(username);
};

onMounted(() => {
  fetchProfile();
});
</script>

<template>
  <header>
    <strong>
      {{ username }}
    </strong>
  </header>
  <div aria-label="profile">
    <Suspense>
      <img :src="profileRef?.avatarUrl" width="100" height="100" />
      <template #fallback> 로딩... </template>
    </Suspense>
  </div>
</template>

<style scoped>
</style>