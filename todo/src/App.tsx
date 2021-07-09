import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import AllTasks from './AllTasks'
import ActiveTasks from './ActiveTasks'
import CompletedTasks from './CompletedTasks'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'task1', isActive: true },
    { id: 2, title: 'task2', isActive: true },
    { id: 3, title: 'task3', isActive: true },
    { id: 4, title: 'task4', isActive: true },
    { id: 5, title: 'task5', isActive: true },
    { id: 6, title: 'task6', isActive: true },
    { id: 7, title: 'task7', isActive: true },
    { id: 8, title: 'task8', isActive: true },
    { id: 9, title: 'task9', isActive: true },
    { id: 10, title: 'task10', isActive: true },
  ])
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
