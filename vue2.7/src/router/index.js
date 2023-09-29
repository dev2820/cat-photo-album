import VueRouter from 'vue-router';
import ProfilePage from 'src/pages/ProfilePage.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'profile',
      component: ProfilePage
    },
    {
      path: '/repos',
      name: 'repos',
      component: () => import('src/pages/RepositoryPage.vue')
    },
    {
      path: '/follower',
      name: 'follower',
      component: () => import('src/pages/FollowerPage.vue')
    }
  ]
});

export default router;
