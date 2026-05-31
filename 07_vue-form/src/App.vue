<template>
  <div class="container">
    <form class="card" @submit.prevent @change="checkValid">
      <h1>Анкета на Vue разработчика!</h1>
      <!-- <div class="form-control">
        <label for="name">Как тебя зовут?</label>
        <input @keyup="onInput" v-model.trim="name" type="text" id="name" placeholder="Введи имя">
        <small v-if="this.errors.name">{{ this.errors.name }}</small>
      </div> -->

      <AppInput :error="errors.name" label="Как тебя зовут?" placeholder="Введи имя" type="text" v-model.trim="name" />


      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input v-model="age" type="number" id="age" value="20">
        <small v-if="this.errors.age">{{ this.errors.age }}</small>
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" name="trip" v-model="relocation" value="Yes" /> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" name="trip" v-model="relocation" value="No" /> Нет</label>
        </div>
        <small v-if="this.errors.relocation">{{ this.errors.relocation }}</small>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="knowledge" value="vuex" /> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="knowledge" value="cli" /> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="knowledge" value="router" /> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Принимаю условия</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="conditions" /> Прочитал и ознакомился с условиями</label>
        </div>

      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from './AppInput.vue';

export default {
  data: () => ({
    name: '',
    age: 18,
    city: 'spb',
    relocation: null,
    knowledge: [],
    conditions: false,
    isValid: false,
    errors: {
      name: '',
      age: '',
      relocation: ''
    }
  }),
  methods: {
    checkValid() {
      console.log('Validation strted')
      this.name.length < 2
        ? this.errors.name = 'Длинна имени должна быть больше 2х символов'
        : this.errors.name = ''
      if (this.age < 18) {
        this.errors.age = 'Возраст должен быть больше 18'
      } else if (this.age > 65) {
        this.errors.age = 'Возраст должен быть меньше 65'
      } else {
        this.errors.age = ''
      }
      !this.relocation
        ? this.errors.relocation = 'Нужно выбрать что нибудь'
        : this.errors.relocation = ''
    },

    showData() {
      console.log('Name: ', this.name)
      // console.log('Age: ', this.age)
      // console.log('City: ', this.city)
      // console.log('Ready fo Relocate: ', this.relocation)
      // console.log('Skills: ', this.knowledge)
      // console.log('Agreement: ', this.conditions)
    }
  },
  components: {
    AppInput
  }
}
</script>

<style>
.form-control small {
  color: tomato
}
</style>
