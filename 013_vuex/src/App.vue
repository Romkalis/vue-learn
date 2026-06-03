<template>
  <TheNavbar />
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{ counter }}</h2>
      <button class="btn primary" @click="increment">+</button>
      <button class="btn primary" @click="decrement">-</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar.vue'
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      counter: (state) => state.counterState.counter
    })
  },
  methods: {
    increment() {
      this.$store.dispatch('counterState/add', 5)
      // this.$store.commit('counterState/increment')
    },
    decrement() {
    }
  },
  components: { TheNavbar }
}
</script>
