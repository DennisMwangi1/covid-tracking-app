import React from 'react'
import logo from '../images/covid-logo.png'

function Aside() {
  return (
    <div className=' h-[100vh] bg-yellow-500'>
        <picture>
            <img src={logo} alt=''  width='150em' className='m-auto pt-20' />
        </picture>
        <nav>

        </nav>

    </div>
  )
}

export default Aside