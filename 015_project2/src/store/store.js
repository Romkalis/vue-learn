import { createStore } from 'vuex'

const existedTasks = JSON.parse(localStorage.getItem('tasks')) || []

const updateLocalstorage = (state) => {
  localStorage.setItem('tasks', JSON.stringify(state))
}

export default createStore({
  state: {
    tasks: existedTasks,
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload)
      console.log(state.tasks)
      updateLocalstorage(state.tasks)
    },
    changeStatus(state, payload) {
      const task = state.tasks.find((t) => t.id == payload.id)

      if (task && payload.status) {
        task.status = payload.status
        updateLocalstorage(state.tasks)
      }
    },
  },
})
