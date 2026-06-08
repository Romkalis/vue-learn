import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    name: 'About',
    component: () => import('../views/Users.vue'),
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import('../views/Tasks.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  linkActiveClass: 'active',
})

export default router
