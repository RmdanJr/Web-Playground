import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Add location'
        className='input-location'
      />
      <input type='text' placeholder='Add guests' className='input-guests' />
      <div className='icon-container'>
        <span className='material-icons search-icon'>search</span>
      </div>
    </div>
  )
}

export default SearchBar
