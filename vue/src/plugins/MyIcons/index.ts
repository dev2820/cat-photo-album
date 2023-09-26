import { App } from 'vue';

import MyIcon from './MyIcon.vue';

export const MyIconsPlugin = {
  install(app: App) {
    app.component('MyIcon', MyIcon);
  },
};
