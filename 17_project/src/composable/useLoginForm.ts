import { computed, onBeforeUnmount, ref } from 'vue'
import { z } from 'zod'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod' // это переходник-адаптер под ZOD, без него  не работает, ЗОД должен быть не ВЫШЕ 3й версии, выше пока что не работает
import { useStore } from 'vuex'

export default function useLoginForm() {
  // описываем схему
  const store = useStore()
  const formSchema = z.object({
    name: z
      .string()
      .min(3, { message: 'Имя должно быть длиннее 2 символа' })
      .max(10, { message: 'Имя должно быть не более 10 символов' }),
    password: z
      .string()
      .min(4, 'Минимум 4 знака') // не обязательно использовать объект, если значений не много
      .max(8, { message: 'Максимум 8 знаков' }),
  })

  // хук useForm- связывает нашу форму
  // хук useFiled используется для привязки к полям

  const { handleSubmit, isSubmitting, submitCount } = useForm({
    validationSchema: toTypedSchema(formSchema),
  }) // прописываем валидацию при нажатии на кнопку d handleSubmit мы получим прив алидации значения всех полей и сможем их обработать, Параметр isSubmitting- флаг, тру или фолс, используется например для блокировки кнопки пока форма отправляется. Есть еще параметр submitCount - который показывает количество попыток отправки (напрмиер может использоваться для борьбы с ботами или множественными отправками, чтобы блокирвоать кнопку, если попытались отпарвить подряд больше 2-3 раз)

  const { value: name, errorMessage: nError, handleBlur: nBlur } = useField('name')
  // под каждое поле подбираем значения 1- имяполя, связываем через v-model, 2 - ошибка которую выкинет, связываем с полем ошибки, 3 - использование блюра, чтобы ошибки валидировались, при потере фокуса полем.
  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField('password')

  const MAX_CLICKS = 3
  const LOCK_MS = 1500

  const isLocked = ref(false)
  const localSubmitCount = ref(0)

  let unlockTimer: ReturnType<typeof setTimeout> | undefined

  const isButtonDisabled = computed(() => isSubmitting.value || isLocked.value)

  const submitValidForm = handleSubmit((val) => {
    console.log('Валидно!', val)
    // если все валидно - получаем val - объект со значениями
    return val
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

    store.dispatch('auth/login', 'data')
    await submitValidForm()
  }

  onBeforeUnmount(() => {
    clearTimeout(unlockTimer)
  })

  return {
    onSubmit,
    nError,
    name,
    nBlur,
    pError,
    password,
    pBlur,
    isButtonDisabled,
    isLocked,
    isSubmitting,
    submitCount,
    localSubmitCount,
  }
}
