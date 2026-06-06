<script setup lang="ts">
import UsersList from '../components/UsersList.vue';
import { useUsers } from '../composable/useUsers.ts';

const users = await useUsers()
// const users: Array<string> = []

</script>

<template>
  <div class="card">
    <h1>Пользователи</h1>
    <UsersList :users="users.value" />
  </div>
</template>
