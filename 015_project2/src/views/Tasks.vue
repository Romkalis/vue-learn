<template>

  <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>

  <!-- <template> -->
  <h3 class="text-white" v-else>Всего активных задач: {{ activeTasks }}</h3>

  <ul class="list" v-if="tasks.length">
    <li class="card" v-for="task of tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>
      <button @click="handleTask(task.id)" class="btn primary">Посмотреть</button>
    </li>
  </ul>

  <!-- </template> -->
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import AppStatus from '../components/AppStatus.vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useStore()
const tasks = store.state.tasks

const activeTasks = computed(() => (tasks.filter(t => t.status === 'primary')).length)

const handleTask = (taskId) => {
  router.push(`/task/${taskId}`)
}



</script>
