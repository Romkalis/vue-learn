<script setup lang="ts">
type User = { id: number; name: string }
const props = defineProps<{ users: User[] }>()
</script>

<template>
  <ul class="list">
    <li class="list-item" v-for="user in props.users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
