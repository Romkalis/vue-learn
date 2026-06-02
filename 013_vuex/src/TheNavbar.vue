<template>
  <header class="navbar">
    Vuex Counter {{ tripled }} <button class="btn" @click="$store.commit('increment')">Plus one
      Btn</button>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      doubled: 'doubleCounter',
    })
    // doubled() {
    //   return this.$store.getters.doubleCounter
    // },
  }
}
</script>
