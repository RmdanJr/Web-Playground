import React from 'react'
import SearchBar from './SearchBar'
import '../styles/Header.css'

const Header = ({search, setSearch }) => {
  return (
    <div className='header'>
      <div className='img-container'>
        <img src='./logo.png' alt='Winbnb Logo' className='logo-img' />
      </div>
      <SearchBar search={search} setSearch={setSearch} />
    </div>
  )
}

export default Header
