import { useFetch } from './useFetch'

export function useTasks() {
  const { response, request, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts')

  return {
    response,
    request,
    isLoading,
  }
}
