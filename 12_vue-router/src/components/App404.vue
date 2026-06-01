<script setup lang="ts">

</script>

<template>
  <div class="not-found card">
    <p class="bignum">404</p>
    <p>Page not found</p>
    <router-link to="/" custom v-slot="{ navigate }">
      <button class="btn" @click="navigate">На главную</button>
    </router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;

  .bignum {
    font-size: 10vw;
    line-height: 0.5;
  }
}
</style>
