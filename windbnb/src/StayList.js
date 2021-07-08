import React from 'react'
import Stay from './Stay'
import './StayList.css'

const StayList = ({ stays }) => {
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
