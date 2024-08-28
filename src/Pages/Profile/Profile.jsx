import React from 'react'
import './Profile.css'
import { Navbar } from '../../Components/index'
import pfp from '../../assets/pfp.jpg'

export const Profile = ({favorites, clearFavorites}) => {

  console.log("Favorites in Profile:", favorites);

  return (
    <div>
      <Navbar /> 
      <main className='p-0'>
        <div className='profile_container'>
          <p className="profile_title text-4xl text-blue-900" >My Profile</p>
          <div className='pic_container'>
            <div className='circle'>
              <img src={pfp} />
            </div>
          </div>
          <div className='info_card bg-blue-100 shadow-xl'>
            <h1 className=' ml-10 font-serif'>Usman Khalid</h1>
            <p className=' self-start mt-16 text-xl'><strong>Email:</strong> usmanexample@gmail.com</p>
            <p className=' self-start mt-16 text-xl'><strong>School:</strong> University of Houston</p>
            <p className=' self-start mt-16 text-xl'><strong>Grade:</strong> Senior</p>
          </div>
          <div className='fav_sch p-2 bg-blue-100 transition-all hover:shadow-2xl'>
            <p className='text-xl text-blue-800 ml-2 '>Favorited scholarships</p>
            <button className=' self-end mb-5 hover:bg-blue-300 transition-all' onClick={clearFavorites}>clear</button>
            <ul className=' overflow-y-auto p-2'>
             {favorites.map((fav, index) => (
                <li className=' flex items-center w-full h-10 bg-gray-100 outline outline-1 p-2 mb-1' key={index}>
                  <p className='flex-1'>{fav.title}</p>
                  <a href={fav.apply}><button className=' h-8 w-16 text-xs bg-blue-200 '>Apply</button></a>
                </li>
              ))}
            </ul>
            
          </div>
          <div className='fav_colleges p-2 bg-blue-100 hover:shadow-2xl '>
            <p className='text-xl text-blue-800 ml-2 '>Favorited colleges</p>
            <button className=' self-end mb-5 hover:bg-blue-300 transition-all'>clear</button>
          </div>
        </div>
      </main>
    </div>
  )
}
