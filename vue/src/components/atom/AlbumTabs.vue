<script setup lang="ts">
  import { computed, ref } from 'vue';

  import type { CatImage } from 'src/requests/cat-image';

  import TabMenu from './TabMenu.vue';
  import type { Component } from 'vue';

  interface Props {
    tabs: {
      name: string;
      screen: Component;
    }[];
    initTabIndex?: number;
  }

  interface Emits {
    (e: 'clickImage', image: CatImage): void;
  }

  const props = withDefaults(defineProps<Props>(), {
    initTabIndex: 0,
  });
  const currentIndexRef = ref(props.initTabIndex);

  const emits = defineEmits<Emits>();

  const menu = computed(() => {
    return props.tabs.map((tab) => tab.name);
  });

  const onSelectMenu = (menuIndex: number) => {
    currentIndexRef.value = menuIndex;
  };

  const onClickImage = (img: CatImage) => {
    emits('clickImage', img);
  };
</script>

<template>
  <div>
    <TabMenu :menu="menu" @select-menu="onSelectMenu">
      <template #menu="{ menuItem }">
        <MyIcon :name="menuItem"></MyIcon>
      </template>
    </TabMenu>
    <KeepAlive>
      <component
        :is="tabs[initTabIndex].screen"
        @click-image="onClickImage"
      ></component>
    </KeepAlive>
  </div>
</template>

<style scoped></style>
