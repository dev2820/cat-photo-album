<script setup>
  import { ref } from 'vue';
  import BaseLayout from 'src/layouts/BaseLayout.vue';
  import { VInput } from 'src/components/atoms';
  import router from 'src/router';

  const username = router.currentRoute.params.user;
  const inputField = ref('');

  const onSearch = () => {
    router.push(inputField.value);
  };
</script>

<template>
  <base-layout>
    <template #header>
      <header>
        <fieldset>
          <v-input
            id="search-field"
            class="card"
            name="username"
            v-model="inputField"
            placeholder="github id를 입력하세요"
            @keypress.enter="onSearch"
          />
        </fieldset>
        <h1>'{{ username }}' 검색 결과</h1>
      </header>
    </template>
    <template #navigator>
      <nav>
        <router-link :to="`/${username}`">Profile</router-link>
        <router-link :to="`/${username}/repos`">Repos</router-link>
        <router-link :to="`/${username}/follower`">Follower</router-link>
      </nav>
    </template>
    <template #default>
      <router-view></router-view>
    </template>
  </base-layout>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header {
    line-height: 1.5;
    max-height: 100vh;
    width: 100%;
  }

  h1 {
    word-break: keep-all;
    text-align: center;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  fieldset {
    display: flex;
    flex-direction: row;
    border: none;
    gap: 1rem;
    padding: 0;
    margin-bottom: 2rem;
  }
  #search-field {
    font-size: 1.15rem;
    flex-grow: 1;
    height: 3.5rem;
  }
</style>
