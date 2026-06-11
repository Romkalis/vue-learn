import { createStore, createLogger } from 'vuex'
import auth from './modules/auth.module.js'

//добавляем логгер на события& импортируем из VUEX, проверяем, находимся ли в режиме разработки?
const plugins = []
if (process.env.NODE_ENV == 'development') {
  plugins.push(createLogger()) // если в режиме разработки то пушим в плагины наш плагин - логгер
}
// дальше - плагины добавятся в объект из-за такого же названия.
export default createStore({
  plugins,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
  },
})
