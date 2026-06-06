import { createStore } from 'vuex'
import useLocalState from '../use/useLocalState.js'

const { existedTasks, updateExistedTasks } = useLocalState()

export default createStore({
  state: {
    tasks: existedTasks,
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload)
      console.log(state.tasks)
      updateExistedTasks(state.tasks)
    },
    changeStatus(state, payload) {
      const task = state.tasks.find((t) => t.id == payload.id)

      if (task && payload.status) {
        task.status = payload.status
        updateExistedTasks(state.tasks)
      }
    },
  },
})
