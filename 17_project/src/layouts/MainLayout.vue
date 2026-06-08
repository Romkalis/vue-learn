<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue';
</script>

<template>
  <div class="nav">
    <TheNavbar />
  </div>
  <div class="container with-nav">
    <div class="card">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
