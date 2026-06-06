import { ref } from 'vue'

export function useFetch(url: RequestInfo, options?: RequestInit) {
  const response = ref(null)

  const request = async () => {
    try {
      const res = await fetch(url, options)

      if (!res.ok) {
        throw new Error(`fetch to ${url} was failed`)
      }

      response.value = await res.json()
    } catch (e: unknown) {
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
  }
}
