import React from 'react'
import InputForm from './InputForm'
import TaskList from './TaskList'

const AllTasks = ({
  tasks,
  setTasks,
}: {
  tasks: { id: number; title: string; isActive: boolean }[]
  setTasks: (a: { id: number; title: string; isActive: boolean }[]) => void
}) => {
  return (
    <>
      <InputForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} type='all' />
    </>
  )
}

export default AllTasks
