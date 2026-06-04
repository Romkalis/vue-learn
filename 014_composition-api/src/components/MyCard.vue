<!-- <script>
export default {
  props: ['name', 'version'],
  computed: {
    doubleVersion() {
      return this.version * 2
    }
  }
}
</script> -->

<script setup>
import { computed, defineProps, toRefs, ref, useSlots } from 'vue';

const props = defineProps({ name: String, version: Number })
const { name, version } = toRefs(props)

const slot = useSlots()

const doubleVersion = computed(() => version.value * 2)

const emit = defineEmits(['sendCountValue'])

const sendTwelveBtn = ref(null)

const sendTwelwe = () => {
  console.log(sendTwelveBtn.value.classList.add('warning'))
  emit('sendCountValue', 12)
}

</script>

<template>
  <div class="card">

    <slot name="divchik" />

    <h1>Vue Composition Api</h1>
    <hr>
    <p>Название: <strong>{{ name }}</strong></p>
    <p>Версия: <strong>{{ version }}</strong></p>
    <p>Удвоенная версия: <strong>{{ doubleVersion }}</strong></p>

    <hr>
    <button @click="sendTwelwe" class="btn" ref="sendTwelveBtn">Make counter = 12</button>

    <hr>
    <slot name="second" />
  </div>
</template>

<style lang="scss" scoped></style>
