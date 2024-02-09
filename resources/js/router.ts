import { createRouter, createWebHistory } from 'vue-router';
import dashboard from '@/pages/dashboard.vue';
import partners from '@/pages/partners.vue';

const router = createRouter({
  history: createWebHistory('/aibou'),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard,
    },
    {
      path: '/partners',
      name: 'partners',
      component: partners,
    },
  ],
});

export default router;
