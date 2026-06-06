import { ref } from 'vue'
import { useFetch } from './useFetch'

export async function useUsers() {
  const { response, request } = useFetch('https://jsonplaceholder.typicode.com/users')
  let loading = ref<boolean>(false)

  if (!loading.value) {
    await request()
    loading.value = true
  }

  return response.value
}
