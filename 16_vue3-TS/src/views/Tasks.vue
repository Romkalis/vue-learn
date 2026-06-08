<script setup lang="ts">
import TasksList from '../components/TasksList.vue';
import { useTasks } from '../composable/useTasks.ts'
import { ref } from 'vue';
const { response, request, isLoading } = useTasks()
request()
const tasks = ref(response)
</script>

<template>
  <div class="card">
    <h2>TASKS LIST</h2>

    <hr>
    <h2 v-if="isLoading">Loading....</h2>
    <TasksList :tasks="tasks" v-else />

  </div>
</template>

<style lang="scss" scoped></style>
