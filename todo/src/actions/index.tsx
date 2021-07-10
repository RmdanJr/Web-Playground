type ts = {
  id?: number
  title: string
  isActive: boolean
}

export const addTask = (task: ts) => {
  return {
    type: 'ADD_TASK',
    payload: task,
  }
}

export const deleteTask = (task: ts) => {
  return {
    type: 'DELETE_TASK',
    payload: task,
  }
}

export const deleteCompletedTasks = () => {
  return {
    type: 'DELETE_COMPLETED_TASKS',
  }
}

export const checkTask = (task: ts) => {
  return {
    type: 'CHECK_TASK',
    payload: task,
  }
}
