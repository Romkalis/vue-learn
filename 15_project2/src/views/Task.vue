<template>
  <div class="card" v-if="task?.title">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="task.status" />
    </p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.text }}</p>
    <div>
      <button class="btn" @click="changeTaskStatus('primary')">Взять в работу</button>
      <button class="btn primary" @click="changeTaskStatus('danger')">Завершить</button>
      <button class="btn danger" @click="changeTaskStatus('warning')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ taskId }}</strong> нет.
  </h3>
</template>

<script setup>
import { useStore } from 'vuex';
import AppStatus from '../components/AppStatus.vue'
import { useRoute } from 'vue-router';


const store = useStore()
const route = useRoute()
const taskId = route.params.taskId

const task = store.state.tasks.find(t => t.id == taskId)

const changeTaskStatus = (status) => {
  console.log(status)
  store.commit('changeStatus', {
    id: taskId,
    status
  })
}


</script>

<style scoped></style>
