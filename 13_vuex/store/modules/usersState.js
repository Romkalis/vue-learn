export default {
  namespaced: true,
  state: {
    users: [
      { id: 1, name: 'John' },
      { id: 2, name: 'MAry' },
    ],
  },
  mutations: {
    add: (state, payload) => {
      state.users.push(payload)
    },
  },
  getters: {
    getUser: (state) => (id) => {
      return state.users.find((u) => u.id == id)
    },
    usersGetter(state, getters, rootState, rootGetters) {
      console.log(
        'state:__',
        state,
        'getters__',
        getters,
        'rootState__',
        rootState,
        'rootGetters__',
        rootGetters,
      )
    },
  },
}
