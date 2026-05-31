<template>
  <div class="container">

    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Input Name</label>
        <input type="text" id="name" v-model.trim="name" placeholder="Input name...">
      </div>
      <button class="btn primary" :disabled="name.length === 0">Создать человека</button>
      <!-- <button class="btn danger" @click="fetchPeople">Запросить список людей</button> -->
    </form>
    <AppLoader v-if="loading"/>
    <AppPeopleList v-else :people="people" :action="fetchPeople" @remove="removePerson" />
    <AppAlert :alert="error" @close="closeError" @cancel="cancelUserDeleting" />
  </div>

</template>

<script>
import AppAlert from './Components/AppAlert.vue';
import AppLoader from './Components/AppLoader.vue';
import AppPeopleList from './Components/AppPeopleList.vue';
import axios from 'axios';

export default {
  data: () => ({
    name: '',
    people: [],
    error: null,
    loading: false
  }),
  methods: {
    async createPerson() {
      try {
        this.loading = true
        const response = await fetch('https://vue-learning-db-qq1-default-rtdb.europe-west1.firebasedatabase.app/people.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: this.name
          })
        })
        if (!response.ok) {
          throw new Error('Firebase not alowed now, try later')
        }
        this.name = ''
        this.fetchPeople()
        this.loading = false
      } catch (e) {
        this.loading = false
        this.error = {
          type: 'danger',
          title: 'Sorry, we have a problem: ',
          text: e.message
        }
      }
      //https://vue-learning-db-qq1-default-rtdb.europe-west1.firebasedatabase.app/
    },
    async fetchPeople() {
      try {
        this.loading = true
        const res = await fetch('https://vue-learning-db-qq1-default-rtdb.europe-west1.firebasedatabase.app/people.json')

        if (!res.ok) {
          throw new Error('Can\'t fetch people from Database')
        }
        const data = await res.json()

        // это приведет к дублированию записей
        // for (let man in data) {
        //   this.people.push(data[man].firstName)
        // }

        this.people = Object.entries(data).map(el =>
        (
          {
            id: el[0],
            firstName: el[1]?.firstName
          })
        )
        this.loading = false
      } catch (e) {
        this.error = {
          type: 'danger',
          title: 'Sorry, we have an error: ',
          text: e.message
        }
        this.loading = false
      }

    },
    async removePerson(id) {
      try {
      const user = this.people.find( person => person.id === id)
      console.log(user)
      axios.delete(`https://vue-learning-db-qq1-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`)
      this.people = this.people.filter(p => p.id !== id)


      this.error = {
          type: 'danger',
          title: 'Deleting...',
          text: `User: ${user.firstName} deleted`
        }
      setTimeout(() => this.error = null, 4500)
      } catch(e) {
        this.error = {
          type: 'danger',
          title: 'We can\'t delete this user now: ',
          text: e.message
        }
      }
    },
    closeError() {
      this.error = null
    },
    cancelUserDeleting(user) {
      this.people = [...this.people, user]
      this.error = null
    }
  },
  components: {
    AppPeopleList,
    AppAlert,
    AppLoader
  }
}
</script>

<style></style>
