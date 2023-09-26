<script setup lang="ts">
  import { computed, ref } from 'vue';

  import type { AlbumImage } from 'src/requests/album';

  import TabMenu from '../atom/TabMenu.vue';
  import type { Component } from 'vue';

  interface Props {
    tabs: {
      name: string;
      screen: Component;
    }[];
    initTabIndex?: number;
  }

  interface Emits {
    (e: 'clickImage', image: AlbumImage): void;
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

  const currentScreen = computed(() => {
    return props.tabs[currentIndexRef.value].screen;
  });

  const onClickImage = (img: AlbumImage) => {
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
      <component :is="currentScreen" @click-image="onClickImage"></component>
    </KeepAlive>
  </div>
</template>

<style scoped></style>
