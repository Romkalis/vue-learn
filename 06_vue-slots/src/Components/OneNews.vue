<template>
  <li class="item pt-1" v-cloak>
    <b>{{ title }}</b> <br>

    <MyButton @action="toggleNews">
      {{ !isOpen ? 'Открыть' : 'Свернуть' }}
    </MyButton>

    <p v-if="isOpen">{{ text }} <br>
      <MyButton v-if="!wasRead" @action="handleWasRead" class="btn primary">
        Новость прочитана
      </MyButton>
      <br>
      <br>
      <NewsList />
    </p>
    <!-- <button v-if="wasRead" @click="markUnread" class="btn danger">
      Отметить непрочитанной
    </button> -->
    <MyButton v-if="wasRead" @action="markUnread" class="danger">
      Отметить непрочитанной
    </MyButton>

  </li>
</template>

<script>
import MyButton from './MyButton.vue'
import NewsList from './NewsList.vue'
export default {
  props: ['title', 'text', 'id', 'wasRead'],
  data() {
    return {
      isOpen: false
    }
  },
  emits: {
    'open-news': null,
    'news-was-read'(id) {
      if (id && typeof id === 'number') {
        return true
      }
      console.warn('Something wrong with ID in "news-was-read"')
      return false
    },
    'mark-unread': null,
    action: null
  },
  methods: {
    toggleNews() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.$emit('open-news')
      }
    },
    handleWasRead() {
      this.isOpen = false
      this.$emit('news-was-read', this.id)
    },
    markUnread() {
      this.$emit('mark-unread', this.id)
    }
  },
  components: {
    MyButton,
    NewsList
  }

}
</script>
