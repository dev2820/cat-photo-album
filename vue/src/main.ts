import './style.css';

import { createApp } from 'vue';

import { MyIconsPlugin } from 'src/plugins/MyIcons';

import App from './App.vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

createApp(App).use(MyIconsPlugin).use(VueQueryPlugin).mount('#app');
