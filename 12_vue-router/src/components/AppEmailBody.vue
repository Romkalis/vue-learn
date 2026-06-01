<template>
  <div>
    <h2>{{ email.theme }}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, cumque ea laborum laudantium nostrum
      odio quis soluta sunt velit?</p>
    <button @click="$router.push('/mail')" class="btn">Закрыть</button>
  </div>
  <!-- <div v-else>
    <h3 class="">Пока писем нет</h3>
  </div> -->
</template>

<script>
export default {
  props: ['id'],
  computed: {
    email() {
      return this.emails.find(mail => Number(mail.id) === Number(this.id))
    }
  },
  inject: ['emails']
}
</script>

<style scoped></style>
