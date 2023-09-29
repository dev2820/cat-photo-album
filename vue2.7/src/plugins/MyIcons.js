import VIcon from './VIcon.vue';
import { paths } from './pathStore';

export const MyIconsPlugin = {
  install: function (app, option = { svgPath: '/icons.svg' }) {
    paths.pathToIcon = option.svgPath;
    app.component('VIcon', VIcon);
  }
};
