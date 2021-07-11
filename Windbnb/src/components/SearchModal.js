import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import '../styles/SearchModal.css'

const SearchModal = ({ search, setSearch, setLocationP, setGuestsP }) => {
  const [location, setLocation] = useState(search.location)
  const [guests, setGuests] = useState(search.guests)
  return createPortal(
    <div
      className='modal-container'
      onClick={() => {
        document.querySelector('#modal-el').classList = 'hidden'
        document.querySelector('#root').classList = ''
      }}
    >
      <div
        className='modal'
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <div className='lg-grid'>
          <div className='modal-head'>
            <p className='modal-head-p'>Edit your search</p>
            <span
              className='material-icons close-icon'
              onClick={() => {
                document.querySelector('#modal-el').classList = 'hidden'
                document.querySelector('#root').classList = ''
              }}
            >
              close
            </span>
          </div>
          <form
            className='input-group'
            onSubmit={(event) => {
              event.preventDefault()
              setLocationP(location)
              setGuestsP(guests)
              setSearch({ location: location, guests: guests })
            }}
          >
            <div className='input input-location'>
              <p>location</p>
              <input
                type='text'
                placeholder='Add location'
                value={location}
                onChange={(event) => {
                  setLocation(event.target.value)
                }}
              />
            </div>
            <div className='input input-guests'>
              <p>guests</p>
              <input
                type='text'
                placeholder='Add guests'
                value={guests}
                onChange={(event) => {
                  setGuests(event.target.value)
                }}
              />
            </div>
            <input type='submit' value='' style={{ display: 'none' }} />
          </form>
          <div className='input-suggestions'>
            {[
              'Helsinki, Finland',
              'Turku, Finland',
              'Oulu, Finland',
              'Vaasa, Finland',
            ].map((location) => (
              <div
                key={location}
                className='location'
                onClick={() => setLocation(location)}
              >
                <span className='material-icons'>location_on</span>
                <p>{location}</p>
              </div>
            ))}
          </div>
          <div className='btn-search-container'>
            <button
              className='btn-search'
              onClick={() => {
                setLocationP(location)
                setGuestsP(guests)
                setSearch({ location: location, guests: guests })
              }}
            >
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
