<template>
  <div>
    <h2>{{ email.theme }}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, cumque ea laborum laudantium nostrum
      odio quis soluta sunt velit?</p>
    <button @click="$router.push('/mail')" class="btn">Закрыть</button>
  </div>

</template>

<script>
export default {
  computed: {
    email() {
      return this.emails.find(m => m.id == this.$route.params.mailId)
    }
  },
  inject: ['emails']
}
</script>

<style scoped></style>
