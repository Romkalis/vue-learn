<template>
  <my-header></my-header>
  <async-component></async-component>
  <main class="container pt-5">
    <section class="card">
      <h2 class="title"> Динамические и асинхронные компоненты</h2>
      <my-tabs @chosen-tab="handleShowData"></my-tabs>

      <div v-if="showTab === 0">TAb 0 Info <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
        obcaecati. Ducimus, laborum numquam velit sapiente repellendus perspiciatis aut maiores modi! Eligendi hic
        ducimus laboriosam adipisci sunt blanditiis quas totam dolorum?</div>
      <div v-if="showTab === 1">TAb 1 Info <br> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe tenetur
        dolore cupiditate laboriosam, amet repellendus officiis sint, alias aperiam error quisquam rem reprehenderit
        nostrum. Inventore eos facere praesentium repellendus impedit.</div>
      <div v-if="showTab === 2">TAb 2 Info <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        dolorem natus alias repudiandae sunt. Neque totam officiis quibusdam, vel blanditiis maxime id officia fuga
        illum deleniti dolorum voluptas laboriosam quae.</div>
    </section>
  </main>
</template>

<script>
import MyTabs from './Components/MyTabs.vue'
export default {
  data: () => ({
    showTab: 0
  }),
  methods: {
    handleShowData(i) {
      this.showTab = i
    },
    sayHello() {
      this.$refs.tabText.sayName()
    }
  },
  components: {
    'my-tabs': MyTabs
  }
}
</script>

<style></style>
