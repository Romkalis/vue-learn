<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
let title = ref(store.getters.appTitle)
// console.log(title.value.toUpperCase())
const handleUppercase = () => {
  title.value = title.value.toUpperCase()
  console.log(store.getters.appTitle)
}


</script>

<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <button @click="handleUppercase" class="btn warning">get title in UpperCASE!</button>
  </div>
</template>

<style lang="scss" scoped></style>
