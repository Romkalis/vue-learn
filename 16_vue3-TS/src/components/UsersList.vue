<script lang="ts" setup async>
import { useUsers } from '../composable/useUsers';


const { users } = await useUsers()
console.log(users)


</script>

<template>
  <ul class="list">
    <li class="list-item" v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
