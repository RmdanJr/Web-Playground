import React from 'react'
import { createPortal } from 'react-dom'
import './SearchModal.css'

const SearchModal = () => {
  return createPortal(
    <div className='modal-container'>
      <div className='modal'>
        <div className='lg-grid'>
          <div className='modal-head'>
            <p className='modal-head-p'>Edit your search</p>
            <span className='material-icons close-icon'>close</span>
          </div>
          <div className='input-group'>
            <div className='input input-location'>
              <p>location</p>
              <input type='text' placeholder='Add location' />
            </div>
            <div className='input input-guests'>
              <p>guests</p>
              <input type='text' placeholder='Add guests' />
            </div>
          </div>
          <div className='input-suggestions'>
            {[
              'Helsinki, Finland',
              'Turku, Finland',
              'Oulu, Finland',
              'Vaasa, Finland',
            ].map((location) => (
              <div key={location} className='location'>
                <span className='material-icons'>location_on</span>
                <p>{location}</p>
              </div>
            ))}
          </div>
          <div className='btn-search-container'>
            <button className='btn-search'>
              <span className='material-icons search-icon'>search</span>
              <p className='btn-text'>Search</p>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal-el')
  )
}

export default SearchModal
