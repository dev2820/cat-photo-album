<script setup lang="ts">
  import { onMounted, shallowRef } from 'vue';

  import type { Follower, Profile } from 'src/requests/profile';
  import {
    defaultProfile,
    getFollowers,
    getProfile,
  } from 'src/requests/profile';
  import { isNil } from 'src/utils/type';

  import FollowersSummary from 'src/components/profile/FollowersSummary.vue';
  import UserProfile from 'src/components/profile/UserProfile.vue';
  import HeaderLayout from 'src/layouts/HeaderLayout.vue';

  const username = 'dev2820';
  const profileRef = shallowRef<Profile>(defaultProfile);
  const followersRef = shallowRef<Follower[]>([]);

  const fetchFollowers = async () => {
    followersRef.value = await getFollowers(username);
  };

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
    fetchFollowers();
  });
</script>

<template>
  <HeaderLayout>
    <h2>
      {{ getUsername(profileRef) }}
    </h2>
  </HeaderLayout>
  <UserProfile :profile="profileRef" />
  <section aria-labelledby="followers-label">
    <h3 id="followers-label">팔로워 요약</h3>
    <FollowersSummary :followers="followersRef" />
  </section>
</template>

<style scoped>
  section[aria-labelledby='followers-label'] {
    display: flex;
    flex-direction: row;
  }
  section[aria-labelledby='followers-label'] > * {
    margin: auto 0;
  }
  #followers-label {
    display: none;
  }
</style>
