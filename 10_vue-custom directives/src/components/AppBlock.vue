<template>
  <div class="container card">
    <h3>Это отдельный блок внутри блока"</h3>
    <app-alert v-if="isAlert" type="warning" title="Заголовок" @close="toggleAlert" text="Тестовый текст"
      closeable="true"></app-alert>

      <div class="card">
        <button class="btn primary" v-on:click="toggleAlert">
          {{isAlert ? 'Скрыть' : 'Показать'}} алерт
        </button>
    </div>
  </div>
</template>

<script>
import alertMixin from '@/mixins/alertMixin';

export default {
  mixins: [alertMixin],
}
</script>
