import { createRouter, createWebHistory } from 'vue-router';

import DashboardView from '@/views/DashboardView.vue';
import InvitationView from '@/views/InvitationView.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      component: DashboardView,
    },
    {
      path: '/invitation/:token',
      component: InvitationView,
    },
    {
      path: '/login',
      component: LoginView,
    }
  ],
});

export default router;
