import React, { useEffect, useState } from 'react'
import Stay from './Stay'
import '../styles/StayList.css'
import InitialStays from '../stays.json'

const StayList = ({ search, setOtherStays }) => {
  const filterStays = (InitialStays, search) => {
    let filteredStays = InitialStays.filter(
      (stay) => stay.maxGuests >= search.guests
    )
    if (search.location !== '')
      filteredStays = filteredStays.filter(
        (stay) => `${stay.city}, ${stay.country}` === search.location
      )
    return filteredStays
  }

  const [stays, setStays] = useState(filterStays(InitialStays, search))

  useEffect(() => {
    const filteredStays = filterStays(InitialStays, search)
    setOtherStays(InitialStays.length - filteredStays.length)
    setStays(filteredStays)
  }, [search])

  return (
    <div className='stay-list'>
      {stays.map(({ photo, superHost, type, beds, rating, title }) => (
        <Stay
          key={photo}
          imgSrc={photo}
          isSuperHost={superHost}
          type={type}
          numOfBeds={beds}
          rating={rating}
          title={title}
        />
      ))}
    </div>
  )
}

export default StayList
