<template>
  <span :class="['badge', type]">{{ status }}</span>
</template>

<script setup>
import { computed } from 'vue';

const { type } = defineProps({
  type: String
})

const status = computed(() => {
  switch (type) {
    case 'primary': return 'В работе'
    case 'danger': return 'завершена'
    default: return 'Отменена'
  }
})
</script>
