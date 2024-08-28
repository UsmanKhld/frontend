import React from 'react'
import './LandingNav.css'


export const LandingNav = () => {
  return (
    <nav className='landing-nav flex justify-between items-center bg-blue-900 w-full '>
      <div className='container mx-auto w-4/5'>
        <ul className='landing-nav_links flex flex-1  text-white justify-end space-x-9 px-12 py-8 '>
            <li className='list-item'><a href='/'>Home</a></li>
            <li className='list-item'><a href='/'>Features</a></li>
            <li className='list-item'><a href='/'>Design</a></li>
            <li className='list-item'><a href='/'>Why Us?</a></li>
            <li className='list-item'><a href='/'>Feedback</a></li>
            <li className='list-item'><a href='/'>FAQ</a></li>
        </ul>
      </div>
      <a href='/login'><button className="relative py-2 px-8 text-black text-base font-bold overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out 
      shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r
       before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 mr-4">
          Login / Sign Up
        </button>
      </a>
    </nav>
  )
}

export default LandingNav