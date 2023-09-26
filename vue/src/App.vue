<script setup lang="ts">
  import { onMounted } from 'vue';

  import { useFollowers } from 'src/composables/use-followers';
  import { useProfile } from 'src/composables/use-profile';
  import type { AlbumImage } from 'src/requests/album';
  import type { Profile } from 'src/requests/profile';
  import { isNil } from 'src/utils/type';

  import AlbumTabs from 'src/components/album/AlbumTabs.vue';
  import CatAlbum from 'src/components/album/CatAlbum.vue';
  import DogAlbum from 'src/components/album/DogAlbum.vue';
  import FollowersSummary from 'src/components/profile/FollowersSummary.vue';
  import UserProfile from 'src/components/profile/UserProfile.vue';
  import UserProfileSummary from 'src/components/profile/UserProfileSummary.vue';
  import BaseLayout from 'src/layouts/BaseLayout.vue';

  const username = 'dev2820';

  const { profileRef, fetchProfile } = useProfile(username);
  const { followersRef, fetchFollowers } = useFollowers(username);
  const tabs = [
    {
      name: 'cat',
      screen: CatAlbum,
    },
    {
      name: 'dog',
      screen: DogAlbum,
    },
  ];

  const getUsername = (profile: Profile) => {
    if (isNil(profile)) {
      return '';
    }

    return profile.name;
  };

  const onClickImage = (img: AlbumImage) => {
    console.log(img);
  };

  onMounted(() => {
    fetchFollowers();
    fetchProfile();
  });
</script>

<template>
  <BaseLayout>
    <template #header>
      <h2>
        {{ getUsername(profileRef) }}
      </h2>
    </template>
    <template #profile-summary>
      <UserProfileSummary :profile="profileRef" />
    </template>
    <template #profile>
      <UserProfile :profile="profileRef" />
    </template>
    <template #followers>
      <FollowersSummary :followers="followersRef" />
    </template>
    <template #album>
      <AlbumTabs :tabs="tabs" @click-image="onClickImage"></AlbumTabs>
    </template>
  </BaseLayout>
</template>

<style scoped></style>
