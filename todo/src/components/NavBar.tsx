import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NavTab = ({ title }: { title: string }) => {
  return <div className='nav-tab'>{title}</div>
}

const NavBar = () => {
  return (
    <div className='nav-bar'>
      {['All', 'Active', 'Completed'].map((navTab) => (
        <Link to={`/${navTab}`.toLowerCase()} key={navTab}>
          <NavTab title={navTab} />
        </Link>
      ))}
    </div>
  )
}

export default NavBar
