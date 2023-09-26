import './style.css';

import { createApp } from 'vue';

import { MyIconsPlugin } from 'src/plugins/MyIcons';

import App from './App.vue';

createApp(App).use(MyIconsPlugin).mount('#app');
