<script>
import MyButton from './MyButton.vue'

export default {
  data: () => ({
    selected: 0
  }),
  components: {
    MyButton
  },
  methods: {
    showTab(i) {
      this.selected = i
      this.$emit('chosenTab', i)
    }
  },
  emits: ['chosen-tab']
}
</script>

<template>
  <ul>
    <li v-for="(tab, i) in 3" :key="tab">
      <MyButton :class="i === selected && ' danger'" @action="showTab(i)">Tab {{ i }}</MyButton>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
