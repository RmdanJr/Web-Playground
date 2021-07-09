import React from 'react'
import TaskList from './TaskList'
import DeleteAll from './DeleteAll'

const CompletedTasks = ({
  tasks,
  setTasks,
}: {
  tasks: { id: number; title: string; isActive: boolean }[]
  setTasks: (a: { id: number; title: string; isActive: boolean }[]) => void
}) => {
  return (
    <>
      <TaskList tasks={tasks} setTasks={setTasks} type='completed' />
      <DeleteAll tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default CompletedTasks
