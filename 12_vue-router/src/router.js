import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Mail from './views/Mail.vue'
import Forget from './views/Forget.vue'

export default createRouter({
  routes: [
    { path: '/login', component: Login, alias: '/' },
    { path: '/dashboard', component: Dashboard },
    { path: '/mail/:mailId?', component: Mail },
    { path: '/forget', component: Forget },
  ],
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
})
