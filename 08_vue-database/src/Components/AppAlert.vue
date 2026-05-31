<template>
  <div v-if="alert" class="alert" :class="alert.type">
    <h3>{{ alert.title }}</h3>
    <p>{{ alert.text }}</p>
    <button v-if="alert.title==='Deleting...'" class="btn danger" @click="$emit=('cancel')"> Отменить </button>
    <button v-else class="btn primary" @click="$emit('close')">Закрыть</button>
  </div>
</template>

<script>
  export default {
    props: ['alert'],
    emits: ['close', 'cancel']
  }
</script>

<style>

</style>
