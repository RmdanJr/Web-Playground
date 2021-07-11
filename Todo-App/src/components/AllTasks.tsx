import React from 'react'
import InputForm from './InputForm'
import TaskList from './TaskList'

const AllTasks: React.FC = () => {
  return (
    <>
      <InputForm />
      <TaskList type='all' />
    </>
  )
}

export default AllTasks
