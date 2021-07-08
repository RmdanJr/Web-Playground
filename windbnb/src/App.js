import React from 'react'
import Header from './Header'
import StayList from './StayList'
import stays from './stays.json'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <StayList stays={stays}/>
    </div>
  )
}

export default App
