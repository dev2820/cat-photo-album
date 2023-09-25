*<script setup lang='ts'>
import { toRefs } from "vue";

import { defaultProfile, type Profile } from "src/requests/profile";

import RoundAvator from "./RoundAvator.vue";
import TotalText from "./TotalText.vue";

interface Props {
  profile: Profile
} 

const props = withDefaults(defineProps<Props>(),{
  profile: () => defaultProfile
})

const { profile:profileRef } = toRefs(props)
</script>

<template>
  <section class="user-summary">
    <RoundAvator
      aria-label="avatar"
      class="avatar"
      :size="100"
      :img-url="profileRef.avatarUrl"
    />
    <div class="total">
      <TotalText
        :total="profileRef.publicRepos"
        label="Repos"
      />
      <TotalText
        :total="profileRef.followers"
        label="Followers"      
      />
      <TotalText
        :total="profileRef.following"
        label="Following"
      />
    </div>
  </section>
  <section class="user-detail">
    <strong>{{ profileRef.name }}</strong>
    <p>{{ profileRef.bio }}</p>
    <a
      :href="profileRef.githubUrl"
      target="_blank"
    >Link to Github</a>
  </section>
</template>

<style scoped>
.user-summary {
  display:flex;
  flex-direction:row;
  margin-bottom:0.625rem;
}
.user-summary > * {
  margin:auto 0;
} 

[aria-label="avatar"] {
  margin-right:4rem;
}
.total {
  display: flex;
  flex-direction:row;
  gap:0.75rem;
}

.user-detail {
  text-align:left;
}

</style>