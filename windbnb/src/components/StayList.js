import React, { useEffect, useState } from 'react'
import Stay from './Stay'
import '../styles/StayList.css'
import InitialStays from '../stays.json'

const StayList = ({ search }) => {
  const [stays, setStays] = useState(
    InitialStays.filter(
      (stay) =>
        `${stay.city}, ${stay.country}` === search.location &&
        stay.maxGuests >= search.guests
    )
  )

  useEffect(() => {
    setStays(
      InitialStays.filter(
        (stay) =>
          `${stay.city}, ${stay.country}` === search.location &&
          stay.maxGuests >= search.guests
      )
    )
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
