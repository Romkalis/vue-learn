<template>
  <div class="container">
    <p>
      <button class="btn primary" @click="getComments">Загрузить комментарии</button>
    </p>
    <div class="card" v-if="comments.length === 0">
      <h3>Еще нет комментариев</h3>
    </div>

    <div class="card" v-else >
      <h2>Комментарии</h2>
      <ul class="list">
        <li class="list-item" v-for="comment of comments" :key="comment.id">
          <div>
            <p>Name: {{ comment.name }}<strong>: - {{comment.email}}</strong></p>
            <small>{{comment.body}}</small>
          </div>
        </li>
      </ul>
    </div>
    <AppLoader :isLoading="isLoading"/>
  </div>
</template>

<!-- https://jsonplaceholder.typicode.com/comments?_limit=42 -->

<script>
import AppLoader from './AppLoader.vue';

  export default {
    data: () => ({
      comments: [],
      isLoading: false
    }),
    methods: {
      async getComments() {
        this.isLoading = true
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=12')
          if(!response.ok) {
            throw new Error ('Comments fetching in AppComponent failed')
          }
          this.comments = await response.json()
          this.isLoading = false
        } catch (e) {
          this.isLoading = false
          console.error(e.message)
        }
      }
    },
    components: {
      AppLoader
    }
  }
</script>

<style>

</style>
