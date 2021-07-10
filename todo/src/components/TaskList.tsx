import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
import '../styles/TaskList.css'

type ts = {
  id: number
  title: string
  isActive: boolean
}

const TaskList = ({ type }: { type: string }) => {
  const displayDeleteBtns = type === 'completed' ? true : false
  const getTasks = (state: { todos: ts[] }) => state.todos
  const tasks = useSelector(getTasks)
  let renderedTasks = tasks
  if (type === 'active')
    renderedTasks = renderedTasks.filter((task) => task.isActive)
  else if (type === 'completed')
    renderedTasks = renderedTasks.filter((task) => !task.isActive)
  return (
    <div className='tasks'>
      {renderedTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          displayDeleteBtns={displayDeleteBtns}
        />
      ))}
    </div>
  )
}

export default TaskList
