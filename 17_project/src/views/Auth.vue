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

    <button class="btn primary" type="submit">Enter</button>
  </form>
</template>

<script setup lang="ts">
import { z } from 'zod';
import { useForm, useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod' // это переходник-адаптер под ZOD, без него  не работает, ЗОД должен быть не ВЫШЕ 3й версии, выше пока что не работает


defineOptions({ name: 'AuthView' })

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Имя должно быть длиннее 2 символа" })
    .max(10, { message: "Имя должно быть не более 10 символов" }),
  password: z.string()
    .min(4, { message: 'Минимум 4 знака' })
    .max(8, { message: "Максимум 8 знаков" })
})

// описываем схему


const { handleSubmit } = useForm({ validationSchema: toTypedSchema(formSchema) }) // прописываем валидацию при нажатии на кнопку
const { value: name, errorMessage: nError, handleBlur: nBlur } = useField('name')
// под каждое поле подбираем значения 1- имяполя, связываем через v-model, 2 - ошибка которую выкинет, связываем с полем ошибки, 3 - использование блюра, чтобы ошибки валидировались, при потере фокуса полем.
const { value: password, errorMessage: pError, handleBlur: pBlur } = useField('password')

const onSubmit = handleSubmit(val => {
  // если все валидно - получаем val - объект со значениями
  console.log('Валидно!', val)
})
</script>

<style scoped>
.error {
  font-weight: 700;
  font-size: 12px;
  color: tomato;
}
</style>
