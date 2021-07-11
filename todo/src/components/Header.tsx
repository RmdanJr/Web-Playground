import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <h1 className='header-title'>#todo</h1>
      </Link>
    </div>
  )
}

export default Header
