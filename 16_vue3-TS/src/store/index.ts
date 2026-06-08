import { createStore, Store } from 'vuex'

type User = {
  id: number
  name: string
}
export interface State {
  count: number
  users: User[]
}

export default createStore<State>({
  state: {
    count: 1,
    users: [{ id: 1, name: 'WRF' }],
  },
  mutations: {},
  actions: {},
  modules: {},
})
