import React from 'react'
import './Stay.css'

const Stay = ({ imgSrc, isSuperHost, type, numOfBeds, rating, title }) => {
  const superHostClass = isSuperHost ? 'super-host' : 'super-host hidden'
  const typeDesc = numOfBeds ? `${type} . ${numOfBeds} beds` : type
  return (
    <div className='stay'>
      <img src={imgSrc} alt='stay' className='stay-img' />
      <div className='info'>
        <p className={superHostClass}>super host</p>
        <p className='info-desc'>{typeDesc}</p>
        <p className='rating'>
          <span className='material-icons rating-icon'>star</span>
          <span className='rating-num'>{rating.toFixed(2)}</span>
        </p>
      </div>
      <div className='title'>{title}</div>
    </div>
  )
}

export default Stay
