import { createStore } from 'vuex'

const store = createStore({
  state: {
    counter: 211,
  },
  mutations: {
    increment: (state) => {
      state.counter++
    },
    decrement: (state) => {
      state.counter--
    },
    add: (state, payload) => {
      state.counter += payload
      console.log(payload)
    },
  },
  getters: {
    doubleCounter: (state) => {
      return state.counter * 2
    },
  },
})

export default store
