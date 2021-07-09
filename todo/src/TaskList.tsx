import React from 'react'
import Task from './Task'

const TaskList = ({
  tasks,
  setTasks,
  type,
}: {
  tasks: { id: number; title: string; isActive: boolean }[]
  setTasks: (a: { id: number; title: string; isActive: boolean }[]) => void
  type: string
}) => {
  let renderedTasks = tasks
  if (type === 'active')
    renderedTasks = renderedTasks.filter((task) => task.isActive)
  else if (type === 'completed')
    renderedTasks = renderedTasks.filter((task) => !task.isActive)
  return (
    <div className='tasks'>
      {renderedTasks.map((task) => (
        <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  )
}

export default TaskList
