<template>
  <header class="navbar">
    Vuex Counter {{ doubled }} <button class="btn" @click="$store.commit('counterState/increment')">Plus one
      Btn</button>

  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('counterState', {
      doubled: 'doubleCounter',
    }),
    ...mapGetters('users', ['usersGetter'])
    // doubled() {
    //   return this.$store.getters.doubleCounter
    // },
  },
}
</script>
