<template>
  <form class="card">
    <h1>Войти в систему</h1>

    <div class="form-control">
      <label for="email">
        <span class="error" v-if="errors.name">{{ errors.name }}</span>
      </label>
      <input type="text" v-model="form.name" placeholder="name" id="name" />
    </div>

    <div class="form-control">
      <label for="password">
        <span class="error" v-if="errors.password">{{ errors.password }}</span>
      </label>
      <input type="password" v-model="form.password" placeholder="Enter password" id="password" />
    </div>

    <button class="btn primary" @click.prevent="onSubmit">Enter</button>
  </form>
</template>

<script setup lang="ts">
import z from 'zod';
import { reactive } from 'vue';
// import { useForm, useField } from 'vee-validate';

type FormType = z.infer<typeof formSchema>

const form = reactive<FormType>({
  name: '',
  password: ''
})
const errors = reactive({
  name: '',
  password: '',
})

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Имя должно быть длиннее 2 символа" })
    .max(10, { message: "Имя должно быть не более 10 символов" }),
  password: z.string()
    .min(4, { message: 'Минимум 4 знака' })
    .max(8, { message: "Максимум 8 знаков" })
})

function cleanErrors() {
  errors.name = '';
  errors.password = '';
}


const onSubmit = () => {
  try {
    cleanErrors()
    const result = formSchema.safeParse(form)

    if (!result.success) {
      // console.log('Error!: ', result.error.flatten().fieldErrors)
      const receivedErrors = result.error.flatten().fieldErrors

      if (receivedErrors.password) {
        errors.password = receivedErrors.password[0] || ''
      }
      if (receivedErrors.name) {
        errors.name = receivedErrors.name[0] || ''
      }
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.warn(e?.message)
    }
  }
}
</script>

<style scoped>
.error {
  font-weight: 700;
  font-size: 12px;
  color: tomato;
}
</style>
