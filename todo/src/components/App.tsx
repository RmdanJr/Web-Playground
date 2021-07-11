import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'
import AllTasks from './AllTasks'
import ActiveTasks from './ActiveTasks'
import CompletedTasks from './CompletedTasks'

import '../styles/App.css'

const App: React.FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Route path='/' exact component={AllTasks} />
        <Route path='/all' component={AllTasks} />
        <Route path='/active' component={ActiveTasks} />
        <Route path='/completed' component={CompletedTasks} />
      </BrowserRouter>
    </div>
  )
}

export default App
