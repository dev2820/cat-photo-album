<script setup>
  import { computed } from 'vue';
  import { useProfile } from 'src/composables/use-profile';
  import { timeToYYYYMMDD } from 'src/utils/time';
  import BigAvatar from 'src/components/profile/BigAvatar.vue';
  import ItemCount from 'src/components/profile/ItemCount.vue';
  import VSection from 'src/components/atoms/VSection.vue';
  import VLabel from 'src/components/atoms/VLabel.vue';
  import router from 'src/router';

  const username = computed(() => router.currentRoute.params.user);
  const { profile } = useProfile(username.value);

  const avatarAttrs = computed(() => ({
    src: profile.value.avatarUrl,
    alt: `${profile.value.name}'s avatar`,
    width: 140,
    height: 140
  }));
  const createdAt = computed(() => timeToYYYYMMDD(new Date(profile.value.createdAt)));
</script>

<template>
  <div v-if="profile && profile.userExist" id="profile-page">
    <big-avatar id="avatar" v-bind="avatarAttrs"></big-avatar>
    <h2>{{ profile.name }}</h2>
    <v-section label="bio" id="bio">
      <p>{{ profile.bio }}</p>
    </v-section>
    <v-section label="summary" id="summary">
      <item-count
        class="count"
        :count="profile.totalPublicRepos"
        :label="'Repository'"
      ></item-count>
      <item-count class="count" :count="profile.totalFollowers" :label="'Follower'"></item-count>
      <item-count class="count" :count="profile.totalFollowing" :label="'Following'"></item-count>
    </v-section>
    <div class="card meta-container">
      <v-section label="meta" id="meta">
        <v-label :icon="'calendar'" :text="createdAt"></v-label>
        <v-label v-if="profile.location" :icon="'map-pin'" :text="profile.location"></v-label>
        <a :href="profile.githubUrl" target="_blank">
          <v-label :icon="'github-mark-white'" :text="'github'"></v-label>
        </a>
      </v-section>
    </div>
  </div>
</template>

<style scoped>
  #profile-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  #avatar {
    border-radius: 9999px;
    margin: 1rem 0;
  }

  h2 {
    margin: 1rem 0;
  }

  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #meta {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  #bio {
    margin: 1rem 0;
  }

  #summary {
    align-self: left;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0;
  }

  .count {
    font-size: 2rem;
    width: 5rem;
  }
  .meta-container {
    width: 100%;
  }
</style>
