import { createStore } from 'vuex'
import counterState from './modules/counterState'
import usersState from './modules/usersState'

const store = createStore({
  modules: {
    counterState,
    users: usersState,
  },
})

export default store
