import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import MyHeader from './Components/MyHeader.vue'
import './theme.css'

const app = createApp(App)
app.component('my-header', MyHeader)
app.component(
  'async-component',
  defineAsyncComponent(() => {
    return import('./Components/AsyncComponent.vue')
  })
)

app.mount('#app')
