import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import MyCard from './components/MyCard.vue'
import ReusablePage from './views/ReusablePage.vue'
import VuexPage from './components/VuexPage.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/card', component: MyCard },
    { path: '/reuse', component: ReusablePage },
    { path: '/vuex', component: VuexPage },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})
