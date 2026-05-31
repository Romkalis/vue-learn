<script>

</script>

<template>
  <div class="card">
    <slot name="header"></slot>
    <slot>
      no text
    </slot>
    <div v-if="$slots.footer" style="border: 2px solid red;">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
