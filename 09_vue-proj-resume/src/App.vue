<template>
  <div class="container column">
    <form class="card card-w30" @submit.prevent="saveValue">
      <div class="form-control" >
        <label for="type">Тип блока</label>
        <select id="type" v-model="type">
          <option value="title">Заголовок</option>
          <option value="subtitle">Подзаголовок</option>
          <option value="avatar">Аватар</option>
          <option value="text">Текст</option>
        </select>
      </div>

      <div class="form-control">
        <label for="value">Значение</label>
        <textarea id="value" v-model="value" rows="3"></textarea>
      </div>

      <button class="btn primary" :disabled="isDisabled">Добавить</button>
    </form>

    <AppLoader :isLoading="isLoading"/>

    <div class="card card-w70" >
      <h3 v-if="availableData.length === 0">Добавьте первый блок, чтобы увидеть результат</h3>
      <component v-else v-for="el in availableData" :key="el.id" :is="renderComponent(el.type)" :value="el.value" />
    </div>
  </div>
  <AppComments />


</template>

<script>
import AppAvatar from './Components/AppAvatar.vue';
import AppSubtitle from './Components/AppSubtitle.vue';
import AppTitle from './Components/AppTitle.vue';
import AppText from './Components/AppText.vue';
import AppComments from './Components/AppComments.vue'
const server = 'https://vue-learning-db-qq1-default-rtdb.europe-west1.firebasedatabase.app/fields.json'

export default {
  data: () => ({
    type: 'title',
    value: '',
    disabled: true,
    availableData: [],
    isLoading: false
  }),
  methods: {
    async saveValue() {
      try {

        if (this.type === 'avatar' && !this.value.startsWith('http') ) {
          throw new Error ('Wrong URL address')
        }

        const response = await fetch(server, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: this.type,
            value: this.value
          })
        })
        if (!response.ok) {
          throw new Error('Something went wrong, can\'t sand data to database now =( ')
        }
        this.value = ''
        this.type = 'title'

        this.getData()
      } catch (e) {
        console.log(e.message)
      }
    },
    async getData() {
      this.isLoading = true
      try {
        const response = await fetch(server)

        if (!response.ok) {
          throw new Error('Fetch failed')
        }
        const data = await response.json()

        this.availableData = Object.entries(data).map( entry => ({
          id: entry[0],
          type: entry[1]?.type,
          value: entry[1]?.value,
        }))
        this.isLoading = false
      } catch (e) {
        console.log(e.message)
        this.isLoading = false
      }
    },
    renderComponent(type) {
    switch(type) {
      case 'title': return AppTitle
      case 'subtitle': return AppSubtitle
      case 'avatar': return AppAvatar
      case 'text': return AppText
      default: return 'div'
    }
  }
  },
  computed: {
    isDisabled() {
      return this.value.length <= 3
    }
  },
  components: {
    'app-title': AppTitle,
    'app-avatar': AppAvatar,
    'app-subtitle': AppSubtitle,
    'app-text': AppText,
    AppComments
  },
  mounted() {
    this.getData()
  }
}
</script>

<!-- https://jsonplaceholder.typicode.com/comments?_limit=42 -->

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
