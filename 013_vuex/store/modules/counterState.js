export default {
  namespaced: true,
  state: {
    counter: 11,
  },
  mutations: {
    increment: (state) => {
      state.counter++
    },
    decrement: (state) => {
      state.counter-
    },
  },
  actions: {
    add: (context, payload) => {
      context.state.counter += payload
    },
  },

  getters: {
    doubleCounter: (state) => {
      return state.counter * 2
    },
  },
}
