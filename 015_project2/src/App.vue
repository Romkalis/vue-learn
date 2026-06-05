<template>
  <TheNavbar />
  <div class="container with-nav">
    <RouterView />
  </div>
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import { RouterView } from 'vue-router';

</script>

<style></style>
