import React, { useState } from 'react'
import Header from './Header'
import StayList from './StayList'
import StaysSummary from './StaysSummary'

const App = () => {
  const [search, setSearch] = useState({
    location: 'Turku, Finland',
    guests: 1,
  })
  const [otherStays, setOtherStays] = useState(10)
  return (
    <div className='app'>
      <Header search={search} setSearch={setSearch} />
      <StaysSummary otherStays={otherStays} />
      <StayList search={search} setOtherStays={setOtherStays} />
    </div>
  )
}

export default App
