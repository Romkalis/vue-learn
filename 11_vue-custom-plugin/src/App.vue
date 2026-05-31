<template>
  <div class="container">
    <div class="card">
      <h1>{{ $i18n('app.title') }}</h1>

      <button @click="$changeLang()">{{ $i18n('app.button') }}</button>
    </div>
  </div>

  <div class="card">
    <button class="btn" @click="isModal = !isModal">
      показать модалку
    </button>
  </div>

  <AppModal v-if="isModal" @close="isModal = !isModal" />


</template>

<script>
import AppModal from './components/AppModal.vue';


export default {
  data: () => ({
    isModal: false
  }),
  components: {
    AppModal
  }
}
</script>
