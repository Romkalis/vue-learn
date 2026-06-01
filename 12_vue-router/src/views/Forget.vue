<template>
  <div class="card">
    <h2>Забыл пароль? Так вспоминай!</h2>

    <button @click="goToLogin" class="btn">Обратно к логину</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>
