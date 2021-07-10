import React from 'react'
import InputForm from './InputForm'
import TaskList from './TaskList'

const AllTasks = () => {
  return (
    <>
      <InputForm />
      <TaskList type='all' />
    </>
  )
}

export default AllTasks
