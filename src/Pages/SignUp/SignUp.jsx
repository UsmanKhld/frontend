import React from 'react'
import './SignUp.css'
import { useState } from "react";
import api from "../../api"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";

export const SignUp = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      
      const res = await api.post("/api/user/register/", {username, password, email, first_name, last_name})
      navigate("/login")
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='background_color flex justify-center items-center'>
      <div className=' rounded-xl h-200 shadow-lg w-120 bg-white py-9 px-5'>
        <div className='flex justify-center text-6xl font-serif text-blue-700 mb-9 '>
          Sign Up
        </div>
        <form onSubmit={handleSubmit}>
          <div className='inputs'>
          <div className='w-full'>
            <div className='flex'>
              <div className='input'>
                <input type='text' 
                value = {first_name}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='First name' 
                className='input-field'/>
                <label htmlFor='input-field' className='input-label'>First name <p className=' text-red-600'>*</p></label>
                <span className='input-highlight'></span>
              </div>
              <div className='input'>
                <input type='text' 
                value = {last_name}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Last name' 
                className='input-field'/>
                <label htmlFor='input-field' className='input-label'>Last name<p className=' text-red-600'>*</p></label>
                <span className='input-highlight'></span>
              </div>
            </div>
          </div>
            <div className='input'>
              <input type='text' 
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email' 
              className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Email<p className=' text-red-600'>*</p></label>
              <span className='input-highlight'></span>
            </div>
            <div className='input'>
              <input type='password' 
              value = {password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password' 
              className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Password<p className=' text-red-600'>*</p></label>
              <span className='input-highlight'></span>
            </div>
            <div className='input'>
              <input type='text' 
              value = {username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='User name' 
              className='input-field'/>
              <label htmlFor='input-field' className='input-label'>User Name</label>
              <span className='input-highlight'></span>
            </div>
          </div>
          <div className='flex'>
          <button type="submit" className='form_buttons'>Sign Up</button>
          <p className='text-red-600 mt-2 ml-20'>* = required</p>
          </div>
        </form>
        <a href='/login'><button className='form_buttons'>Already have an account? Login</button></a>
      </div>
    </div>
  )
}

export default SignUp
