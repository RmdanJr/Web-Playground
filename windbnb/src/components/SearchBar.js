import React, { useState } from 'react'
import '../styles/SearchBar.css'
import SearchModal from './SearchModal'

const SearchBar = ({ search, setSearch }) => {
  const [location, setLocation] = useState(search.location)
  const [guests, setGuests] = useState(search.guests)
  document.querySelector('#modal-el').classList = 'hidden'
  document.querySelector('#root').classList = ''

  return (
    <>
      <form
        className='search-bar'
        onSubmit={(event) => {
          event.preventDefault()
          setSearch({ location: location, guests: guests })
        }}
      >
        <input
          type='text'
          placeholder='Add location'
          className='input-location'
          value={location}
          onChange={(event) => {
            setLocation(event.target.value)
          }}
        />
        <input
          type='text'
          placeholder='Add guests'
          className='input-guests'
          value={guests}
          onChange={(event) => {
            setGuests(event.target.value)
          }}
        />
        <input type='submit' value='' style={{ display: 'none' }} />
        <div
          className='icon-container'
          onClick={() => {
            document.querySelector('#modal-el').classList = ''
            document.querySelector('#root').classList = 'fixed'
          }}
        >
          <span className='material-icons search-icon'>search</span>
        </div>
      </form>
      <SearchModal
        search={search}
        setSearch={setSearch}
        setLocationP={setLocation}
        setGuestsP={setGuests}
      />
    </>
  )
}

export default SearchBar
