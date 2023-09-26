<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';

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
  const $modal = ref();
  const selectedImageRef = ref<AlbumImage | undefined>();

  const getUsername = (profile: Profile) => {
    if (isNil(profile)) {
      return '';
    }

    return profile.name;
  };
  const closeModal = () => {
    $modal.value.classList.toggle('hidden');
  };
  const onClickImage = (img: AlbumImage) => {
    $modal.value.classList.toggle('hidden');
    selectedImageRef.value = img;
  };

  const onClickBackdrop = () => {
    closeModal();
  };

  const onEscPressed = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  onMounted(() => {
    fetchFollowers();
    fetchProfile();
    document.addEventListener('keydown', onEscPressed);
  });
  onUnmounted(() => {
    document.removeEventListener('keydown', onEscPressed);
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
  <div id="modal" ref="$modal" class="hidden" @click="onClickBackdrop">
    <img
      v-if="selectedImageRef"
      id="modal-content"
      :src="selectedImageRef.url"
      :width="selectedImageRef.width"
      :height="selectedImageRef.height"
      @click.stop
    />
  </div>
</template>

<style scoped>
  #modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px) brightness(50%);
  }
  #modal.hidden {
    z-index: -1;
    visibility: hidden;
  }
  #modal-content {
    position: absolute;
    background: #fff;
    width: fit-content;
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #modal.hidden > #modal-content {
    visibility: hidden;
  }
</style>
