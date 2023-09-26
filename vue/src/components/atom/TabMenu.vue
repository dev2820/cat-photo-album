<script setup lang="ts">
  import { toNumber } from 'src/utils/type';

  interface Props {
    menu: Array<string | number | object>;
  }

  interface Emits {
    (e: 'selectMenu', index: number): void;
  }

  withDefaults(defineProps<Props>(), {
    menu: () => [],
  });
  const emits = defineEmits<Emits>();

  const selectMenu = (e: MouseEvent) => {
    const $target = e.target as HTMLElement;
    const $li = $target.closest('li');

    if (!$li) return;

    const index = toNumber($li.dataset['index']);
    emits('selectMenu', index);
  };
</script>

<template>
  <menu @click="selectMenu">
    <li v-for="(menuItem, index) in menu" :key="index" :data-index="index">
      <slot name="menu" :menu-item="menuItem"></slot>
    </li>
  </menu>
</template>

<style scoped>
  menu {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
  }
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
    text-align: center;
    height: 3.5rem;
    line-height: 4rem;
    cursor: pointer;
    transition: 0.2s;
  }
  li:hover {
    background: rgba(255, 255, 255, 0.2);
  }
</style>
