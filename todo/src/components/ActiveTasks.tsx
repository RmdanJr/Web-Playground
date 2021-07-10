import React from 'react'
import InputForm from './InputForm'
import TaskList from './TaskList'

const ActiveTasks = () => {
  return (
    <div>
      <InputForm />
      <TaskList type='active' />
    </div>
  )
}

export default ActiveTasks
