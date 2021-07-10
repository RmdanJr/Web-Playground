import React from 'react'
import { useState } from 'react'
import './InputForm.css'

const InputForm = ({
  tasks,
  setTasks,
}: {
  tasks: { id: number; title: string; isActive: boolean }[]
  setTasks: (a: { id: number; title: string; isActive: boolean }[]) => void
}) => {
  const [title, setTitle] = useState<string>('')
  const addToDoHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (title !== '') {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: title, isActive: true },
      ])
      setTitle('')
    }
  }
  return (
    <form className='form' onSubmit={addToDoHandle}>
      <input
        type='text'
        placeholder='add details'
        className='add-details-input'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input type='submit' value='Add' className='submit-btn' />
    </form>
  )
}

export default InputForm
