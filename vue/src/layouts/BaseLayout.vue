<script setup lang="ts"></script>

<template>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <section aria-labelledby="profile-summary">
      <h3 id="profile-summary">프로필 요약</h3>
      <slot name="profile-summary"></slot>
    </section>
    <section aria-labelledby="profile">
      <h3 id="profile">프로필</h3>
      <slot name="profile"></slot>
    </section>
    <section aria-labelledby="followers">
      <h3 id="followers">팔로워 요약</h3>
      <slot name="followers"></slot>
    </section>
    <section aria-labelledby="album">
      <h3 id="album">앨범</h3>
      <slot name="album"></slot>
    </section>
  </main>
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

  #followers,
  #profile-summary,
  #profile,
  #album {
    display: none;
  }
</style>
