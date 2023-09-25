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
  import HeaderLayout from 'src/layouts/HeaderLayout.vue';

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

  onMounted(() => {
    fetchFollowers();
    fetchProfile();
    loadNextImages();
  });
</script>

<template>
  <HeaderLayout>
    <h2>
      {{ getUsername(profileRef) }}
    </h2>
  </HeaderLayout>
  <section aria-labelledby="profile-summary">
    <h3 id="profile-summary">프로필 요약</h3>
    <UserProfileSummary :profile="profileRef" />
  </section>
  <section aria-labelledby="profile">
    <h3 id="profile">프로필</h3>
    <UserProfile :profile="profileRef" />
  </section>
  <section aria-labelledby="followers">
    <h3 id="followers">팔로워 요약</h3>
    <FollowersSummary :followers="followersRef" />
  </section>
  <section aria-labelledby="album">
    <h3 id="album">앨범</h3>
    <GridAlbum
      :images="catImagesRef"
      @load-next-images="loadNextImages"
    ></GridAlbum>
  </section>
</template>

<style scoped>
  section[aria-labelledby='followers'] {
    display: flex;
    flex-direction: row;
    margin: 1.5rem 0;
  }
  section[aria-labelledby='followers'] > * {
    margin: auto 0;
  }
  section[aria-labelledby='profile-summary'] {
    display: flex;
    margin-bottom: 0.75rem;
  }
  section[aria-labelledby='profile'] {
    margin-bottom: 1rem;
  }
  .user-summary {
    display: flex;
    flex-direction: row;
    margin-bottom: 0.625rem;
  }
  .user-summary > * {
    margin: auto 0;
  }

  #followers,
  #profile-summary,
  #profile,
  #album {
    display: none;
  }
</style>
