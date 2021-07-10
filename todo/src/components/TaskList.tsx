import React from 'react'
import Task from './Task'
import '../styles/TaskList.css'

type ts = {
  id: number
  title: string
  isActive: boolean
}

const TaskList = ({
  tasks,
  setTasks,
  type,
}: {
  tasks: ts[]
  setTasks: (a: ts[]) => void
  type: string
}) => {
  const displayDeleteBtns = type === 'completed' ? true : false
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
          tasks={tasks}
          setTasks={setTasks}
          displayDeleteBtns={displayDeleteBtns}
        />
      ))}
    </div>
  )
}

export default TaskList
