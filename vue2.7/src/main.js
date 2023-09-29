import 'src/assets/main.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueRouter from 'vue-router';
import { MyIconsPlugin } from 'src/plugins/MyIcons';

Vue.use(VueRouter);
Vue.use(MyIconsPlugin, { svgPath: '/icons.svg' });

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');
