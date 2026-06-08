<script setup lang="ts">
import UsersList from '../components/UsersList.vue';
import { useUsers } from '../composable/useUsers';
import { onMounted } from 'vue';


const { users, request, isLoading } = useUsers()
onMounted(() => request())

</script>

<template>
  <div class="card">
    <h1>Пользователи</h1>
    <p>{{ isLoading }}</p>
    <UsersList :users="users || []" />
  </div>
</template>
