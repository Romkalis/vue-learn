export default {
  namespaced: true,
  state: () => ({
    token: null,
  }),
  mutations: {
    setToken: (state, token) => {
      state.token = token
      localStorage.setItem('JWT-token', token)
    },
    removeToken: (state) => {
      state.token = null
      localStorage.removeItem('JWT-token')
    },
  },
  actions: {
    login: async ({ commit }) => {
      commit('setToken', 'TEST TOKEN')
    },
  },
  getters: {
    token(state) {
      return state.token
    },
    isAuthenticated(state) {
      return !!state.token
    },
  },
}
