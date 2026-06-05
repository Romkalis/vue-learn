<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="taskName">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="taskDedlineDate">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="taskDescription"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>


<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()

const taskName = ref('')
const taskDedlineDate = ref('')
const taskDescription = ref('')

const isValid = computed(() => {
  return !!taskDedlineDate.value.trim() && !!taskName.value.trim() && !!taskDescription.value.trim()
})

const defineStatus = () => {
  if (Date.now() >= Number(taskDescription.value)) {
    return 'danger'
  }
  return 'primary'
}

const onSubmit = () => {
  // отправляем данные в стор
  store.commit('addTask', {
    id: Date.now(),
    title: taskName.value,
    date: taskDedlineDate.value,
    text: taskDescription.value,
    status: defineStatus()
  })
  //  сбрасываем форму
  taskName.value = ''
  taskDedlineDate.value = ''
  taskDescription.value = ''

  router.push('/')
}


</script>
