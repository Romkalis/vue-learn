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
      state.counter--
    },
  },
  actions: {
    add: (context, payload) => {
      context.counter += payload
      console.log(payload)
    },
  },

  getters: {
    doubleCounter: (state) => {
      return state.counter * 2
    },
  },
}
