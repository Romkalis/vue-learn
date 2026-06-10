<script setup lang="ts">
// import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// const meta = computed(() => route.meta.layout)
// console.log(meta)
// генерим лейаут в зависимости от метаданных переданы в роут (можно написать switch, можно как сейчас - просто передавать уже готовый компонент лейаута)
</script>

<template>
  <h1>layouts page</h1>
  <component :is="route.meta.layout">
    <router-view />
  </component>
</template>
