import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCompletedTasks } from '../actions'
import '../styles/DeleteAll.css'

const DeleteAll: React.FC = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(deleteCompletedTasks())
  }
  return (
    <div className='delete-all-container'>
      <button className='delete-all-btn' onClick={handleClick}>
        <span className='material-icons-outlined'>delete</span>
        <p>delete all</p>
      </button>
    </div>
  )
}

export default DeleteAll
