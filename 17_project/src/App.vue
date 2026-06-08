<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NotFoundLayout from './layouts/NotFoundLayout.vue'


const route = useRoute()

const layout = computed(() => {
  return route?.meta?.layout || NotFoundLayout
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
