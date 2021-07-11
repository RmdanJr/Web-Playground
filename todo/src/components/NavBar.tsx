import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

const NavTab: React.FC<{ title: string }> = ({ title }) => {
  return <div className='nav-tab'>{title}</div>
}

const NavBar: React.FC = () => {
  return (
    <div className='nav-bar'>
      {['All', 'Active', 'Completed'].map((navTab) => (
        <NavLink
          to={`/${navTab}`.toLowerCase()}
          key={navTab}
          activeStyle={{ borderBottom: '2px solid #2f80ed' }}
        >
          <NavTab title={navTab} />
        </NavLink>
      ))}
    </div>
  )
}

export default NavBar
