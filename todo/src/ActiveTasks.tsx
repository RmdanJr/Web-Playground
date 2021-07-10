import React from 'react'
import InputForm from './InputForm'
import TaskList from './TaskList'

type ts = {
  id: number
  title: string
  isActive: boolean
}

const ActiveTasks = ({
  tasks,
  setTasks,
}: {
  tasks: ts[]
  setTasks: (a: ts[]) => void
}) => {
  return (
    <div>
      <InputForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} type='active' />
    </div>
  )
}

export default ActiveTasks
