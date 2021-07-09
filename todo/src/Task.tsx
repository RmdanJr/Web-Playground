import React from 'react'
import './Task.css'

const Task = ({
  tasks,
  task,
  setTasks,
}: {
  tasks: { id: number; title: string; isActive: boolean }[]
  task: { id: number; title: string; isActive: boolean }
  setTasks: (tasks: { id: number; title: string; isActive: boolean }[]) => void
}) => {
  const taskTitleClass = task.isActive ? 'task-name' : 'task-name line-through'
  const handleClick = () => {
    const filteredTasks = [
      ...tasks.filter((t) => t.id !== task.id),
      { ...task, isActive: !task.isActive },
    ].sort((a, b) => a.id - b.id)
    console.log(filteredTasks)
    setTasks(filteredTasks)
  }
  return (
    <div className='task'>
      <input
        type='checkbox'
        className='task-check'
        onChange={handleClick}
        checked={!task.isActive}
      />
      <p className={taskTitleClass}>{task.title}</p>
    </div>
  )
}

export default Task
