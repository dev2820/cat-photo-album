<script setup lang="ts">
  import { computed, toRefs } from 'vue';

  import { type Follower } from 'src/requests/profile';

  import RoundAvatar from 'src/components/atom/RoundAvatar.vue';

  import FollowersSummaryText from './FollowersSummaryText.vue';

  type Props = {
    followers: Follower[];
  };

  const props = withDefaults(defineProps<Props>(), {
    followers: () => [],
  });

  const { followers } = toRefs(props);

  const top3followers = computed(() => {
    return followers.value.slice(0, 3);
  });

  const avatarSize = 36;
</script>

<template>
  <div class="avatar-container">
    <RoundAvatar
      v-for="(follower, index) in top3followers"
      :key="index"
      class="avatar"
      :img-url="follower.avatarUrl"
      :size="avatarSize"
    />
  </div>
  <FollowersSummaryText :followers="top3followers" />
</template>

<style scoped>
  .avatar-container {
    display: flex;
    flex-direction: row;
  }
  .avatar {
    position: relative;
    margin: auto 0;
  }
  .avatar:nth-child(1) {
    z-index: 3;
  }
  .avatar:nth-child(2) {
    transform: translate(-50%);
    z-index: 2;
  }
  .avatar:nth-child(3) {
    transform: translate(-100%);
    z-index: 1;
  }
</style>
