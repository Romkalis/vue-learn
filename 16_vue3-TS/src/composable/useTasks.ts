import { useFetch } from './useFetch'
import type { Ref } from 'vue'

type Task = {
  userId: number
  id: number
  title: string
  body: string
}

interface UsablePosts {
  request: () => Promise<void>
  isLoading: Ref<boolean>
  response: Ref<Task[] | undefined>
}

export function useTasks(): UsablePosts {
  const { response, request, isLoading } = useFetch<Task[] | undefined>(
    'https://jsonplaceholder.typicode.com/posts',
  )

  return {
    response,
    request,
    isLoading,
  }
}
