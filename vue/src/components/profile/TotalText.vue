<script setup lang="ts">
  import { toRefs } from 'vue';

  interface Props {
    total: number;
    label: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    total: 0,
    label: '',
  });

  const { total, label } = toRefs(props);

  const toLocale = (num: number) => {
    return num.toLocaleString();
  };
</script>

<template>
  <span>
    <b>{{ toLocale(total) }}</b>
    {{ label }}
  </span>
</template>

<style scoped>
  span {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
</style>
