import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import i18nPlugin from './i18nPlugin.js'

const dictionary = {
  ru: {
    app: {
      title: 'Как работают плагины во Vue',
      button: 'Изменить язык',
    },
    modal: {
      title: 'Модалка',
      text: 'Текст модалки',
      button: 'Закрыть модалку',
    },
  },
  en: {
    app: {
      title: 'Vue plugins work explanation',
      button: 'Change Language',
    },
    modal: {
      title: 'Modal window',
      text: 'Modal text',
      button: 'Close Modal',
    },
  },
}

const app = createApp(App)
app.use(i18nPlugin, dictionary)
// .directive('focus', {
//   mounted(el) {
//     console.log(el)
//     el.focus()
//   },
// })
app.mount('#app')
