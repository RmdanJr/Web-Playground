import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import AllTasks from './AllTasks'
import ActiveTasks from './ActiveTasks'
import CompletedTasks from './CompletedTasks'
import '../styles/App.css'

type ts = {
  id: number
  title: string
  isActive: boolean
}

function App() {
  const [tasks, setTasks] = useState<ts[] | never[]>([])
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Route
          path='/'
          exact
          render={() => <AllTasks tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path='/all'
          render={() => <AllTasks tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path='/active'
          render={() => <ActiveTasks tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path='/completed'
          render={() => <CompletedTasks tasks={tasks} setTasks={setTasks} />}
        />
      </BrowserRouter>
    </div>
  )
}

export default App
