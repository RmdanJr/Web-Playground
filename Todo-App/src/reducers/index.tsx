import { ts } from '../types'

const initialTasks: ts[] = []
export const todosReducer = (
  tasks = initialTasks,
  action: { type: string; payload?: ts }
) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...tasks, { ...action.payload, id: tasks.length + 1 }]
    case 'DELETE_TASK':
      const remainingTasks = [
        ...tasks.filter((task) => task.id !== action.payload!.id),
      ]
      for (let i = 0; i < remainingTasks.length; i++)
        remainingTasks[i].id = i + 1
      return remainingTasks
    case 'DELETE_COMPLETED_TASKS':
      const filteredTasks = [...tasks.filter((task) => task.isActive)]
      for (let i = 0; i < filteredTasks.length; i++) filteredTasks[i].id = i + 1
      return filteredTasks
    case 'CHECK_TASK':
      return [
        ...tasks.filter((task) => task.id !== action.payload!.id),
        { ...action.payload!, isActive: !action.payload!.isActive },
      ].sort((a, b) => a.id! - b.id!)
    default:
      return tasks
  }
}
