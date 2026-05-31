<script>
export default {
  props: ['people', 'action'],
  emits: ['remove']
}
</script>

<template>
  <div v-if="people.length" class="card">
    <ul class="list">
      <li v-for="person of people" :key="person.id">
        <p>{{ person.firstName }}</p>
        <button class="btn danger" @click="$emit('remove', person.id)">remove user</button>
      </li>
    </ul>
  </div>
  <div class="card" v-else>
    <h4>Пока данных нет</h4>
    <button class="btn" @click="action">Запросить список людей</button>
  </div>
</template>

<style lang="scss" scoped></style>
