import { ref } from 'vue'
import { useFetch } from './useFetch'

export async function useUsers() {
  const loading = ref<boolean>(false)
  const {
    response: users,
    request,
    isLoading,
  } = useFetch('https://jsonplaceholder.typicode.com/users')

  if (!loading.value) {
    await request()
    loading.value = true
  }

  return { users }
}
