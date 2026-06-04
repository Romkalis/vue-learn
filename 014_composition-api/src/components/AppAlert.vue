<script setup lang="ts">
defineProps({
  title: String,
  type: String
})
</script>

<template>
  <div class="alert" :class="type">
    <p class="alerty-title">{{ title }}</p>
    <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ex, praesentium libero enim hic mollitia
      voluptas quibusdam, vel recusandae laborum earum, consequuntur nostrum dolores? Eius dolorem itaque aperiam dolor
      voluptatum.</p>
  </div>
</template>

<style lang="scss" scoped></style>
