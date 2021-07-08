import React, { useState } from 'react'
import Header from './Header'
import StayList from './StayList'

const App = () => {
  const [search, setSearch] = useState({
    location: 'Turku, Finland',
    guests: 1,
  })
  return (
    <div className='app'>
      <Header setSearch={setSearch} />
      <StayList search={search} />
    </div>
  )
}

export default App
