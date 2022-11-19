import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/covid-logo.png'

function Aside() {
   
  return (
    <div className=' h-[100vh] bg-amber-500 rounded-tl-3xl rounded-bl-3xl  '>
        <picture>
            <img src={logo} alt=''  width='150em' className='m-auto ' />
        </picture>
        <nav className='grid grid-rows-4 m-auto text-2xl font-black text-white font-sans h-[80vh]'>
            <NavLink className={({ isActive }) =>
              isActive ? 'text-black m-auto text-3xl font-serif' : 'm-auto'
            } 
            to='/' >Overview</NavLink>
            <NavLink to='/symptoms'  className={({ isActive }) =>
              isActive ? 'text-black m-auto text-3xl font-serif' : 'm-auto'
            }  >Symptoms</NavLink>
            <NavLink to='/statistics' className={({ isActive }) =>
              isActive ? 'text-black m-auto text-3xl font-serif' : 'm-auto'
            } >Statistics</NavLink>
            <NavLink to='/globaltrends' className={({ isActive }) =>
              isActive ? 'text-black m-auto text-3xl font-serif' : 'm-auto'
            }  >Global Trends</NavLink>
        </nav>

    </div>
  )
}

export default Aside