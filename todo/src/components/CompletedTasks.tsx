import React from 'react'
import TaskList from './TaskList'
import DeleteAll from './DeleteAll'

type ts = {
  id: number
  title: string
  isActive: boolean
}

const CompletedTasks = ({
  tasks,
  setTasks,
}: {
  tasks: ts[]
  setTasks: (a: ts[]) => void
}) => {
  return (
    <>
      <TaskList tasks={tasks} setTasks={setTasks} type='completed' />
      <DeleteAll tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default CompletedTasks
