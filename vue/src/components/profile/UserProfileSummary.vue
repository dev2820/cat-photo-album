<script setup lang="ts">
  import { toRefs } from 'vue';

  import { defaultProfile, type Profile } from 'src/requests/profile';

  import GradientRingAvatar from './GradientRingAvatar.vue';
  import TotalText from './TotalText.vue';

  interface Props {
    profile: Profile;
  }

  const props = withDefaults(defineProps<Props>(), {
    profile: () => defaultProfile,
  });

  const { profile: profileRef } = toRefs(props);
</script>
<template>
  <GradientRingAvatar
    aria-label="avatar"
    class="avatar"
    :size="100"
    :img-url="profileRef.avatarUrl"
  />
  <div class="total">
    <TotalText :total="profileRef.publicRepos" label="Repos" />
    <TotalText :total="profileRef.followers" label="Followers" />
    <TotalText :total="profileRef.following" label="Following" />
  </div>
</template>

<style scoped>
  .avatar {
    margin-right: 5rem;
  }
  .total {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }
  .total > * {
    margin: auto 0;
  }
</style>
