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
import { computed, onBeforeUnmount, ref } from 'vue';
import { z } from 'zod';
import { useForm, useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod' // это переходник-адаптер под ZOD, без него  не работает, ЗОД должен быть не ВЫШЕ 3й версии, выше пока что не работает


defineOptions({ name: 'AuthView' })

// описываем схему

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Имя должно быть длиннее 2 символа" })
    .max(10, { message: "Имя должно быть не более 10 символов" }),
  password: z.string()
    .min(4, 'Минимум 4 знака')// не обязательно использовать объект, если значений не много
    .max(8, { message: "Максимум 8 знаков" })
})

// хук useForm- связывает нашу форму
// хук useFiled используется для привязки к полям

const { handleSubmit, isSubmitting, submitCount } = useForm({ validationSchema: toTypedSchema(formSchema) }) // прописываем валидацию при нажатии на кнопку d handleSubmit мы получим прив алидации значения всех полей и сможем их обработать, Параметр isSubmitting- флаг, тру или фолс, используется например для блокировки кнопки пока форма отправляется. Есть еще параметр submitCount - который показывает количество попыток отправки (напрмиер может использоваться для борьбы с ботами или множественными отправками, чтобы блокирвоать кнопку, если попытались отпарвить подряд больше 2-3 раз)

const { value: name, errorMessage: nError, handleBlur: nBlur } = useField('name')
// под каждое поле подбираем значения 1- имяполя, связываем через v-model, 2 - ошибка которую выкинет, связываем с полем ошибки, 3 - использование блюра, чтобы ошибки валидировались, при потере фокуса полем.
const { value: password, errorMessage: pError, handleBlur: pBlur } = useField('password')

const MAX_CLICKS = 3
const LOCK_MS = 1500

const isLocked = ref(false)
const localSubmitCount = ref(0)

let unlockTimer: ReturnType<typeof setTimeout> | undefined

const isButtonDisabled = computed(() => isSubmitting.value || isLocked.value)

const submitValidForm = handleSubmit(val => {
  console.log('Валидно!', val)
  // если все валидно - получаем val - объект со значениями
})

const lockButton = () => {
  isLocked.value = true
  clearTimeout(unlockTimer)
  unlockTimer = setTimeout(() => {
    isLocked.value = false
    localSubmitCount.value = 0
  }, LOCK_MS)
}

const onSubmit = async () => {
  if (isLocked.value) return

  localSubmitCount.value += 1

  if (localSubmitCount.value > MAX_CLICKS) {
    lockButton()
    return
  }

  await submitValidForm()
}

onBeforeUnmount(() => {
  clearTimeout(unlockTimer)
})
</script>

<style scoped>
.error {
  font-weight: 700;
  font-size: 12px;
  color: tomato;
}
</style>
