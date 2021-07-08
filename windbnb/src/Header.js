import React from 'react'
import SearchBar from './SearchBar'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='img-container'>
        <img src='./logo.png' alt='Winbnb Logo' className='logo-img' />
      </div>
      <SearchBar />
    </div>
  )
}

export default Header
