import React from 'react'
import TaskList from './TaskList'
import DeleteAll from './DeleteAll'

const CompletedTasks:React.FC = () => {
  return (
    <>
      <TaskList type='completed' />
      <DeleteAll />
    </>
  )
}

export default CompletedTasks
