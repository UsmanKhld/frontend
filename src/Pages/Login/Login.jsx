import React from 'react'
import './Login.css'
import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";

export const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post("/api/token/", {username, password})
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate("/dashboard")
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='background_color flex justify-center items-center'>
      <div className=' rounded-xl h-128 shadow-lg w-96 bg-white py-9 px-5'>
        <div className='flex justify-center text-6xl font-serif text-blue-700 mb-12 '>
          Login
        </div>
        <form onSubmit={handleSubmit}>
          <div className='inputs'>
            <div className='input'>
              <input type='text' 
              value = {username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username' 
              className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Email</label>
              <span className='input-highlight'></span>
            </div>
            <div className='input'>
              <input type='password' 
              value = {password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password' 
              className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Password</label>
              <span className='input-highlight'></span>
            </div>
          </div>
          <button type="submit" className='form_buttons'>Login</button>
        </form>
        <a href='/forgot-password'><button className='form_buttons'>Forgot Password</button></a>
        <a href='/sign-up'><button className='form_buttons'>Create an account</button></a>
      </div>
    </div>
  )
}

export default Login
