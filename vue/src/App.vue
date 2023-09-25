<script setup lang="ts">
  import { onMounted } from 'vue';

  import { useCatAlbum } from 'src/composables/use-cat-album';
  import { useFollowers } from 'src/composables/use-followers';
  import { useProfile } from 'src/composables/use-profile';
  import type { Profile } from 'src/requests/profile';
  import { isNil } from 'src/utils/type';

  import GridAlbum from 'src/components/album/GridAlbum.vue';
  import FollowersSummary from 'src/components/profile/FollowersSummary.vue';
  import UserProfile from 'src/components/profile/UserProfile.vue';
  import UserProfileSummary from 'src/components/profile/UserProfileSummary.vue';
  import BaseLayout from 'src/layouts/BaseLayout.vue';

  const username = 'dev2820';

  const { profileRef, fetchProfile } = useProfile(username);
  const { followersRef, fetchFollowers } = useFollowers(username);
  const { catImagesRef, loadNextImages } = useCatAlbum();

  const getUsername = (profile: Profile) => {
    if (isNil(profile)) {
      return '';
    }

    return profile.name;
  };

  const showImageLarge = (imageIndex: number) => {
    const clickedImage = catImagesRef.value[imageIndex];
    console.log(clickedImage);
  };

  onMounted(() => {
    fetchFollowers();
    fetchProfile();
    loadNextImages();
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
      <GridAlbum
        :images="catImagesRef"
        @load-next-images="loadNextImages"
        @click-image="showImageLarge"
      ></GridAlbum>
    </template>
  </BaseLayout>
</template>

<style scoped></style>
