<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { getProfile, type Profile } from 'src/requests/profile';
import { isNil } from 'src/utils/type';

import HeaderLayout from 'src/layouts/HeaderLayout.vue';

const username = 'dev2820';
const profileRef = ref<Profile | null>(null);

const fetchProfile = async () => {
  profileRef.value = await getProfile(username);
};

const getUsername = (profile: Profile | null) => {
  if (isNil(profile)) {
    return '';
  }

  return profile.name;
};

onMounted(() => {
  fetchProfile();
});
</script>

<template>
  <HeaderLayout>
    <strong>
      {{ getUsername(profileRef) }}
    </strong>
  </HeaderLayout>
  <div aria-label="profile">
    <Suspense>
      <img
        :src="profileRef?.avatarUrl"
        width="100"
        height="100"
      >
      <template #fallback>
        로딩...
      </template>
    </Suspense>
  </div>
</template>

<style scoped></style>
