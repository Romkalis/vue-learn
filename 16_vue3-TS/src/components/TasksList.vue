<script setup lang="ts">
import { Task } from '../types/Types';
type Props = Task[] | null;
const props = defineProps<{ tasks: Props }>()
</script>

<template>
  <ul class="list">
    <li class="item" v-for="task in props.tasks" :key="task.id">
      <h3>{{ task.title }}</h3>
      <p class="text">{{ task.body }}</p>
    </li>
  </ul>
</template>

<style scoped>
.list {
  list-style: disc;
  margin-left: 1em;

}

.item::marker {
  color: tomato
}
</style>
