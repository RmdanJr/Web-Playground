import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import '../styles/InputForm.css'

import { addTask } from '../actions'

const InputForm = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const addToDoHandle = (event: FormEvent) => {
    event.preventDefault()
    dispatch(addTask({ title: title, isActive: true }))
    setTitle('')
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
