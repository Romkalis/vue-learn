import { ref } from 'vue'
import type { Ref } from 'vue'

type Request = () => Promise<void>
type Response<T> = Ref<T | undefined>
type isLoading = Ref<boolean>
interface UsableFetch<T> {
  request: Request
  isLoading: isLoading
  response: Response<T>
}

export function useFetch<T>(url: RequestInfo, options?: RequestInit): UsableFetch<T> {
  const response: Response<T> = ref(undefined)
  const isLoading: isLoading = ref(false)

  const request = async () => {
    try {
      isLoading.value = true
      const res = await fetch(url, options)

      if (!res.ok) {
        throw new Error(`fetch to ${url} was failed`)
      }

      response.value = await res.json()
      isLoading.value = false
    } catch (e: unknown) {
      isLoading.value = false
      if (e instanceof Error) {
        console.error(e.message)
      } else {
        console.error('Неизвестная ошибка', e)
      }
    }
  }

  return {
    response,
    request,
    isLoading,
  }
}
