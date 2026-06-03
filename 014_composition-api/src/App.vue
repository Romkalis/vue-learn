<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }}</strong></p>

      <button class="btn" @click="changeValues">Изменить</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';

export default {
  setup() {
    // const name = ref('VueJS')
    // const version = ref('3')
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


    return {
      name, version,
      changeValues,
      // name: framework.name,
      // version: framework.version
      framework
    }
  }
}


// export default {
//   // data() {
//   //   return {
//   //     name: 'VueJS',
//   //     version: 3
//   //   }
//   // },
//   // methods: {
//   //   changeInfo() {
//   //     this.name = 'Vue JS!'
//   //     this.version = 4
//   //   }
//   // }
// }
</script>
