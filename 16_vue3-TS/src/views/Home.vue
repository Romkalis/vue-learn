<template>
  <div class="card">
    <h1>Как Vue работает с TypeScript?</h1>


    <button class="btn" @click="openUsers">Открыть пользователей</button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter();

const openUsers = (): void => {
  router.push('/users')
}

</script>
