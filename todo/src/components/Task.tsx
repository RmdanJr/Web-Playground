import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteTask, checkTask } from '../actions'

import '../styles/Task.css'

type ts = {
  id: number
  title: string
  isActive: boolean
}

const Task = ({
  task,
  displayDeleteBtns,
}: {
  task: ts
  displayDeleteBtns: boolean
}) => {
  const dispatch = useDispatch()
  const taskTitleClass = task.isActive ? 'task-name' : 'task-name line-through'
  const handleCheck = () => {
    dispatch(checkTask(task))
  }
  const handleDelete = () => {
    dispatch(deleteTask(task))
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
