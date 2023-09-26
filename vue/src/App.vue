<script setup lang="ts">
  import { onMounted } from 'vue';

  import { useFollowers } from 'src/composables/use-followers';
  import { useProfile } from 'src/composables/use-profile';
  import type { CatImage } from 'src/requests/cat-image';
  import type { Profile } from 'src/requests/profile';
  import { isNil } from 'src/utils/type';

  import CatAlbum from 'src/components/album/CatAlbum.vue';
  import AlbumTabs from 'src/components/atom/AlbumTabs.vue';
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
  ];

  /**
   * TODO: Dog API 연결 (VueQuery 사용할 것)
   * TODO: ImageModal 생성 및 Teleport로 연결
   * TODO: 스켈레톤 UI가 적용된 이미지 컴포넌트 만들기 (Vue2를 사용할 것)
   * TODO: Image위에 canvas text를 얹을 수 있는 기능 만들기 (v-model) 사용
   * TODO: Image 다운로드 기능 만들기
   * TODO: Vuex 쓰기
   */
  const getUsername = (profile: Profile) => {
    if (isNil(profile)) {
      return '';
    }

    return profile.name;
  };

  const onClickImage = (img: CatImage) => {
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
