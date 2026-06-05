import New from '@/views/New.vue'
import Task from '@/views/Task.vue'
import Tasks from '@/views/Tasks.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Tasks,
    },
    {
      path: '/new',
      component: New,
    },
    {
      path: '/task/:taskId',
      component: Task,
    },
  ],
})
