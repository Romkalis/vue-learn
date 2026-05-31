<template>
  <ul>
    <li v-for="n in news" :key="n.title">
      {{ n.title }}
    </li>
  </ul>
</template>

<script>
export default {
  inject: ['news']
}
</script>
