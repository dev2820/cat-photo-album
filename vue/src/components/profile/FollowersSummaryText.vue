<script setup lang="ts">
  import { type Follower } from 'src/requests/profile';

  interface Props {
    followers: Follower[];
  }
  withDefaults(defineProps<Props>(), {
    followers: () => [],
  });
</script>
<template>
  <p v-if="followers.length > 2">
    Followed by<b>{{ followers[0].name }}</b
    >,<b>{{ followers[1].name }}</b> <br />
    and {{ followers.length - 2 }} others
  </p>
  <p v-else-if="followers.length === 2">
    Followed by<b>{{ followers[0].name }}</b
    >,<b>{{ followers[1].name }}</b>
  </p>
  <p v-if="followers.length === 1">
    Followed by<b>{{ followers[0].name }}</b>
  </p>
  <p v-else />
</template>
