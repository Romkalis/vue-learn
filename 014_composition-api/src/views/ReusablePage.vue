<template>

  <AppAlert v-if="alert" @click="close" title="Работа с Composition" type="primary"></AppAlert>

  <div class="card">
    <h2>Reusable Page</h2>
    <button @click="toggle" class="btn primary">Показать сообщение</button>
    <button class="btn" @click="navigate">Перейти на главную</button>

  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import AppAlert from '@/components/AppAlert.vue';
import { useAlert } from '@/composables/alert';

const { alert, toggle, close } = useAlert()

const router = useRouter()
const navigate = () => {
  router.push('/')
}
</script>
<style></style>
