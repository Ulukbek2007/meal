import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const Header = ({search,searchData}) => {
  return (
    <div className='header' style={{background:'#23180D'}}>
      <div className='headerform'>
        <Link style={{textDecoration:'none'}}><img src={logo} alt="Logo" /></Link>
        <div className="homeapisearch">
        <Link className='home' to={'/'}>Home</Link>
        <Link className='api' to={'/'}>Api</Link>
        <input
        value={search}
        onChange={(e)=>searchData(e.target.value)}
        type="text" placeholder="Search..." />
        </div>
        </div>
    </div>
  )
}

export default Header