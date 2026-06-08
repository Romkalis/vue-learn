import { createRouter, createWebHistory } from 'vue-router'
import Help from '@/views/Help.vue'
import Home from '@/views/Home.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import NotFoundLayout from '@/layouts/NotFoundLayout.vue'

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    alias: '/auth',
    component: () => import('../views/Auth.vue'),
    meta: {
      layout: AuthLayout,
    },
  },
  {
    path: '/',
    name: 'Home',
    alias: '/',
    component: Home,
    meta: {
      layout: MainLayout,
    },
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
    meta: {
      layout: MainLayout,
    },
  },
  {
    path: '/:notFound(.*)',
    meta: {
      layout: NotFoundLayout,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
