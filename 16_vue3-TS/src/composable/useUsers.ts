import { ref, onMounted, Ref } from 'vue'
import { useFetch } from './useFetch'

export function useUsers() {
  const { response, request, isLoading } = useFetch('https://jsonplaceholder.typicode.com/users')

  return {
    users: response,
    request,
    isLoading,
  }
}
