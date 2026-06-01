import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Mail from './views/Mail.vue'
import Forget from './views/Forget.vue'
import AppEmailBody from './components/AppEmailBody.vue'
import App404 from './components/App404.vue'

export default createRouter({
  routes: [
    { path: '/login', component: Login, alias: '/' },
    { path: '/dashboard', component: Dashboard },
    { path: '/forget', component: Forget },
    { path: '/mail/', component: Mail, children: [{ path: ':mailId', component: AppEmailBody }] },
    { path: '/:notFound(.*)', component: App404 },
  ],
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
})
