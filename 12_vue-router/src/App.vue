<template>
  <the-navbar :visible="isRegistred"></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'

export default {
  components: { TheNavbar },
  data: () => ({
    isRegistred: true,
    logoutRoute: null
  }),
  methods: {
    login() {
      this.isRegistred = true
      if (this.logoutRoute) {
        this.$router.push(this.logoutRoute)
      } else {
        this.$router.push('/dashboard')
      }
    },
    logout() {
      this.isRegistred = false
      this.$router.push('/login')
      this.logoutRoute = this.$route.path
    }
  },
  provide() {
    return {
      emails: [
        { id: 1, theme: 'Купил себе PlayStation 5' },
        { id: 2, theme: 'Выучил Vue Router' },
        { id: 3, theme: 'Хочу изучить весь Vue' },
        { id: 4, theme: 'А следующий блок про Vuex!' },
        { id: 5, theme: 'А что там на счет Vue Hooks?' }
      ],
      login: this.login,
      logout: this.logout
    }
  }
}
</script>

<style></style>
