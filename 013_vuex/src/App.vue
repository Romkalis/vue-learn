<template>
  <TheNavbar />
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{ $store.state.counter }}</h2>
      <button class="btn primary" @click="increment">+</button>
      <button class="btn primary" @click="$store.commit('decrement')">-</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar.vue'
export default {

  methods: {
    increment() {
      this.$store.commit('add', 5)
    },
    // decrement() {
    //   this.counter--
    // }
  },
  components: { TheNavbar }
}
</script>
