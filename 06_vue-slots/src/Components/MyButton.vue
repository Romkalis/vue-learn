<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot />
  </button>
</template>

<script>
export default {
  // data() {},
  props: {
    color: {
      type: String,
      default: '',
      validator(value) {
        return ['primary', 'danger', ''].includes(value)
      }
    }
  },
  emits: ['action']
}
</script>
