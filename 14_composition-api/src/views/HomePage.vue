<template>
  <div class="container pt-5">
    <AppAlert v-if="alert" title="Алерт на главной странице" type="danger" @click="close" />
    <MyCard :name="name" :version="version" @send-count-value="changeCountToValue">
      <template #divchik>
        <h1>Heylololoe</h1>
        <button class="btn danger" @click="toggle">Show Alert!</button>
      </template>

      <template #second>
        <button class="btn" @click="counter++">Slot Button</button>
      </template>
    </MyCard>

    <div class="card">
      <button class="btn" @click="changeValues">Изменить</button>
      <hr>
      <h3>counter: {{ counter }} | doubled: {{ doubleCount }}</h3>
      <button class="btn danger" @click="counter++">count UP!</button>

      <button ref="buttonDom">Click</button>

      <input @change="handleChange" type="text" v-model="firstName">
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, computed, onMounted } from 'vue';
import MyCard from '../components/MyCard.vue';
import AppAlert from '@/components/AppAlert.vue';
import { useAlert } from '@/composables/alert.js';

const { alert, close, toggle } = useAlert()

const firstName = ref('')

const handleChange = () => console.log(firstName.value)
const changeCountToValue = (val) => {
  counter.value = val
}

const buttonDom = ref(null)
onMounted(() => {
  buttonDom.value.classList.add('btn', 'danger', 'warning')
})


const counter = ref(0)
const doubleCount = computed(() => {
  return counter.value * 2
})
const framework = reactive({
  name: 'VueJS',
  version: '3'
})
const { name, version } = toRefs(framework)
function changeValues() {
  name.value = name.value + ' !'
  version.value = '4'
  console.log('click', framework)
}
</script>
