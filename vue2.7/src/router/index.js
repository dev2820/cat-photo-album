import VueRouter from 'vue-router';
import HomePage from 'src/pages/HomePage.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/:user/',
      component: () => import('src/pages/UserPage.vue'),
      children: [
        {
          path: '',
          name: 'profile',
          component: () => import('src/pages/ProfilePage.vue')
        },
        {
          path: 'repos',
          name: 'repos',
          component: () => import('src/pages/RepositoryPage.vue')
        },
        {
          path: 'follower',
          name: 'follower',
          component: () => import('src/pages/FollowerPage.vue')
        }
      ]
    }
  ]
});

export default router;
