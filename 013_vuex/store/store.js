import { createStore, createLogger } from 'vuex'
import counterState from './modules/counterState'
import usersState from './modules/usersState'

const store = createStore({
  plugins: [createLogger()],
  modules: {
    counterState,
    users: usersState,
  },
})

export default store
