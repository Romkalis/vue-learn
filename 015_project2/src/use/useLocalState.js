export default function () {
  const existedTasks = []
  try {
    if (JSON.parse(localStorage.getItem('tasks'))) {
      existedTasks = JSON.parse(localStorage.getItem('tasks'))
    }
  } catch (e) {
    console.log(e.message)
  }

  const updateExistedTasks = (state) => {
    localStorage.setItem('tasks', JSON.stringify(state))
  }
  return {
    existedTasks,
    updateExistedTasks,
  }
}
