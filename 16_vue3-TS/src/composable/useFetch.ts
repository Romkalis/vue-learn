import { Ref, ref } from 'vue'

export function useFetch(url: RequestInfo, options?: RequestInit) {
  const response = ref(null)
  const isLoading: Ref<boolean> = ref(false)

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
