<script lang="ts" setup async>
import { useUsers } from '../composable/useUsers';
import { useStore } from 'vuex';

const { users } = await useUsers()
const store = useStore()

console.log(store)




</script>

<template>
  <ul class="list">
    <li class="list-item" v-for="user in users || []" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
