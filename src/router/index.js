import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/views/welcome/welcome.vue';
import Another from '@/views/another/another.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/another',
      name: 'Another',
      component: Another,
    },
  ],
  mode: 'history',
});
