import React from 'react'
import './Task.css'

type ts = {
  id: number
  title: string
  isActive: boolean
}

const Task = ({
  tasks,
  task,
  setTasks,
  displayDeleteBtns,
}: {
  tasks: ts[]
  task: ts
  setTasks: (tasks: ts[]) => void
  displayDeleteBtns: boolean
}) => {
  const taskTitleClass = task.isActive ? 'task-name' : 'task-name line-through'
  const handleCheck = () => {
    const filteredTasks = [
      ...tasks.filter((t) => t.id !== task.id),
      { ...task, isActive: !task.isActive },
    ].sort((a, b) => a.id - b.id)
    setTasks(filteredTasks)
  }
  const handleDelete = () => {
    const remainingTasks = [...tasks.filter((t) => t.id !== task.id)].sort(
      (a, b) => a.id - b.id
    )
    for (let i = 0; i < remainingTasks.length; i++) {
      remainingTasks[i].id = i + 1
    }
    setTasks(remainingTasks)
  }
  return (
    <div className='task-container'>
      <div className='task'>
        <input
          type='checkbox'
          className='task-check'
          onChange={handleCheck}
          checked={!task.isActive}
        />
        <p className={taskTitleClass}>{task.title}</p>
      </div>
      {displayDeleteBtns ? (
        <div className='delete-icon-container'>
          <span
            className='material-icons-outlined delete-icon'
            onClick={handleDelete}
          >
            delete
          </span>
        </div>
      ) : null}
    </div>
  )
}

export default Task
