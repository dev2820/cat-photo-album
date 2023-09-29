<script setup>
  import { ref } from 'vue';

  import HomeLayout from 'src/layouts/HomeLayout.vue';
  import { VButton, VInput } from 'src/components/atoms';

  import router from 'src/router';

  const searchText = ref('');
  const onSearch = () => {
    if (searchText.value === '') {
      alert('검색할 아이디를 입력해주세요');
      return;
    }
    router.push(searchText.value);
  };
</script>

<template>
  <home-layout>
    <h1>github 아이디를 입력해 유저를 검색하세요</h1>
    <fieldset>
      <v-input
        id="search-field"
        class="card"
        name="username"
        v-model="searchText"
        placeholder="github id를 입력하세요"
        @keypress.enter="onSearch"
      />
      <v-button id="search-button" @click="onSearch">검색</v-button>
    </fieldset>
  </home-layout>
</template>

<style scoped>
  h1 {
    text-align: center;
    word-break: keep-all;
    margin-bottom: 3rem;
  }
  fieldset {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: none;
  }

  #search-field {
    height: 3.5rem;
  }
  #search-button {
    height: 3rem;
    background: var(--primary-color);
    cursor: pointer;
  }
  #search-button:hover {
    filter: brightness(0.9);
  }
</style>
