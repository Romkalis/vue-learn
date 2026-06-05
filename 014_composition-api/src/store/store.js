import { createStore } from 'vuex'

export default createStore({
  state: {
    appTitle: 'This is Vuex in COMPOSITION API',
  },
  getters: {
    appTitle(state) {
      return state.appTitle + '!'
    },
  },
})
