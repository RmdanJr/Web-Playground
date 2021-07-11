import React from 'react'
import '../styles/StaysSummary.css'

const StaysSummary = ({otherStays}) => {
  return (
    <div className='stays-summary'>
      <p className='summary-title'>Stays in Finland</p>
      <p className='summary-desc'>{otherStays}+ stays</p>
    </div>
  )
}

export default StaysSummary
