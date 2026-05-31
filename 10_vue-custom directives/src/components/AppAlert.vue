<template>
  <div class="alert" :class="type">
    <p class="alert-title">
      {{title}}
    </p>
    <p>{{ text }}</p>
    <button v-if="closeable" @click="$emit('close')" class="btn" :class="type">
      Закрыть
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      text: String,
      title: String,
      closeable: {
        type: Boolean,
        default: false,
        required: false
      },
      type: {
        type: String,
        validator() {
          return ['primary', 'danger', 'warning']
        },
        default: 'primary'
      }
    },
    emits: ['close']
  }
</script>

<style lang="scss" scoped>

</style>
