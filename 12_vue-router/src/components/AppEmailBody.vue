<template>
  <div v-if="email?.theme">
    <h2>{{ email.theme }}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, cumque ea laborum laudantium nostrum
      odio quis soluta sunt velit?</p>
    <button class="btn">Закрыть</button>
  </div>
  <div v-else>
    <h3 class="">Пока писем нет</h3>
  </div>
</template>

<script>
export default {
  computed: {
    email() {
      return this.emails.find(mail => mail.id == this.mailId)
    }
  },
  inject: ['emails'],
  props: ['mailId']
}
</script>

<style scoped></style>
