import { createRouter, createWebHistory } from 'vue-router'
import Help from '@/views/Help.vue'
import Home from '@/views/Home.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import store from '../store/index.js'
// импортируем обычный стор, из файла, без хука, так как бы не в setup, для beforeeach проверки в роутах

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    alias: '/auth',
    component: () => import('../views/Auth.vue'),
    meta: {
      layout: AuthLayout,
      auth: false,
    },
  },
  {
    path: '/',
    name: 'Home',
    alias: '/',
    component: Home,
    meta: {
      layout: MainLayout,
      auth: true,
    },
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
    meta: {
      layout: MainLayout,
      auth: true,
    },
  },
  {
    path: '/:notFound(.*)',
    component: NotFoundPage,
    meta: {
      layout: MainLayout,
      auth: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  const isAuthNeed = to.meta.auth
  const isAuthenticated = store.getters['auth/isAuthenticated']

  if (isAuthNeed && isAuthenticated) {
    //next устарел в роутере 4й версии, сейчас используется ретерн
    // next()
    return true
  } else if (isAuthNeed && !isAuthenticated) {
    return { path: '/auth?message=auth' }
    // next('/auth?message=auth')
  } else {
    // next()
    return true
  }
})

export default router
