<script>
export default {
  props: ['isShowed'],
  mounted() {
    console.log(this.isShowed)
  },
  emits: ['close']
}

</script>

<template>
  <div class="modal-backdrop" @click="$emit('close')">
    <div class="modal" v-if="'isShowed'">
      <div class="card">
        <h3>{{ $i18n('modal.title') }}</h3>
        <p>{{ $i18n('modal.text') }}</p>
        <button @click="$emit('close')" class="btn">{{ $i18n('modal.button') }}</button>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped></style>
