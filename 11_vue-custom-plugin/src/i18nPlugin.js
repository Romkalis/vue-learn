import { reactive } from 'vue'
export default {
  install(app, options) {
    const state = reactive({
      lang: 'ru',
    })

    app.config.globalProperties.$i18n = (key) => {
      return key.split('.').reduce((words, i) => {
        return words[i] || '=== unknown ==='
      }, options[state.lang])
    }

    app.config.globalProperties.$changeLang = (lang = null) => {
      if (lang !== null) {
        state.lang = lang
      } else {
        state.lang = state.lang === 'en' ? 'ru' : 'en'
      }
    }
  },
}
