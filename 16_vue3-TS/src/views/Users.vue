<script lang="ts" setup>
import UsersList from '../components/UsersList.vue';

</script>

<template>
  <div class="card">
    <h1>Пользователи</h1>
    <Suspense>
      <template #default>
        <UsersList />
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>
