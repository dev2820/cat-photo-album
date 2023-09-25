<script setup lang="ts">
import { onMounted, shallowRef } from 'vue';

import { defaultProfile, getProfile, type Profile } from 'src/requests/profile';
import { isNil } from 'src/utils/type';

import UserProfile from 'src/components/profile/UserProfile.vue';
import HeaderLayout from 'src/layouts/HeaderLayout.vue';

const username = 'dev2820';
const profileRef = shallowRef<Profile>(defaultProfile);

const fetchProfile = async () => {
  profileRef.value = await getProfile(username);
};

const getUsername = (profile: Profile) => {
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
    <h2>
      {{ getUsername(profileRef) }}
    </h2>
  </HeaderLayout>
  <UserProfile
    :profile="profileRef"
  />
</template>

<style scoped></style>
