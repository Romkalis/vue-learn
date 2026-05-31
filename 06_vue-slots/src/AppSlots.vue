<template>

  <div class="container pt-1">
    <app-block>
      <template v-slot:header>
        <header class="card">
          <h1>About Slots</h1>
        </header>
      </template>

      <template #footer>
        <footer>
          Это футер
        </footer>
      </template>
    </app-block>

    <slots-parameters>
      <template #default="{ iter, idx }">
        <span style="color: red;">
          <strong>{{ idx + 1 }} item is:</strong> {{ iter }}
        </span>
      </template>
    </slots-parameters>
  </div>
</template>

<script>
import AppBlock from './Components/AppBlock.vue'
import SlotParameters from './Components/SlotParameters.vue'
export default {
  components: {
    'app-block': AppBlock,
    'slots-parameters': SlotParameters
  }
}
</script>

<style></style>
