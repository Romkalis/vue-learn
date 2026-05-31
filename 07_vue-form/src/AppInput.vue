<script>
export default {
  props: {
    error: String,
    placeholder: String,
    label: String,
    type: String,
    modelValue: String
  },
  methods: {
    getId: () => 'input' + Math.random(),
    onInput(evt) {
      this.$emit('update:modelValue', evt.target.value)
    }
  },
  emits: ['update:modelValue']
}

</script>

<template>
  <div class="form-control">
    <label :for="getId">{{ label }}</label>
    <input @input="onInput" :value="modelValue" :type="type" :id="getId" :placeholder="placeholder">
    <!-- <input @keyup="onInput" ref="nameInput" type="text" id="name" placeholder="Введи имя"> -->
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<style lang="scss" scoped></style>
