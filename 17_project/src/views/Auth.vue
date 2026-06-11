<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>

    <div class="form-control">
      <label for="email">
        <span class="error" v-if="nError">{{ nError }}</span>
      </label>
      <input type="text" v-model="name" placeholder="name" id="name" name="name" @blur="nBlur" />
    </div>

    <div class="form-control">
      <label for="password">
        <span class="error" v-if="pError">{{ pError }}</span>
      </label>
      <input type="password" v-model="password" placeholder="Enter password" id="password" name="password"
        @blur="pBlur" />
    </div>

    <button class="btn primary" type="submit" :disabled="isButtonDisabled">Enter</button>
    <p class="error" v-if="isLocked">Слишком много попыток. Попробуй снова через 1.5 секунды.</p>
  </form>

  <div class="card">
    <p>{{ isSubmitting }}- флаг при отправке формы, для блокировки операций</p>
    <hr>
    <p>{{ submitCount }} - счетчик отправок формы, например можно блокировать повторную отправку на какое-то время</p>
    <hr>
    <p>{{ localSubmitCount }} - локальный счетчик кликов для временной блокировки кнопки</p>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import useLoginForm from '../composable/useLoginForm.ts'

const { onSubmit, nError, name, nBlur, pError, password, pBlur, isButtonDisabled, isLocked, isSubmitting, submitCount, localSubmitCount } = useLoginForm()

const store = useStore()
console.log(store.state.auth.token)

</script>

<style scoped>
.error {
  font-weight: 700;
  font-size: 12px;
  color: tomato;
}
</style>
