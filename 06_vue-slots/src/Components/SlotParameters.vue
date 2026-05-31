<script>

</script>

<template>
  <ul class="card">
    <li class="item" v-for="(item, i) in 5" :key="i + item">
      <slot :iter="item" :idx="i" />
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
