<script setup lang="ts">
import { onMounted, shallowRef } from 'vue';

import { getProfile, type Profile } from 'src/requests/profile';
import { isNil } from 'src/utils/type';

import UserProfile from 'src/components/profile/UserProfile.vue';
import HeaderLayout from 'src/layouts/HeaderLayout.vue';

const username = 'dev2820';
const profileRef = shallowRef<Profile>({
  name: '',
  avatarUrl: '',
  bio: '',
  followers: 0,
  following: 0,
  repos: 0,
  githubUrl: ''
});

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
