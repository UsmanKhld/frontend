import React from 'react'

export const ForgotPass = () => {
  return (
    <div className='background_color flex justify-center items-center'>
      <div className=' rounded-xl h-128 shadow-lg w-96 bg-white py-9 px-5'>
        <div className='flex text-center justify-center text-6xl font-serif text-blue-700 mb-12 '>
          Forgot Password
        </div>
        <form >
          <div className='inputs'>
            <div className='input'>
              <input type='text' placeholder='Current Password' className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Current Password</label>
              <span className='input-highlight'></span>
            </div>
            <div className='input'>
              <input type='text' placeholder='New Password' className='input-field'/>
              <label htmlFor='input-field' className='input-label'>New Password</label>
              <span className='input-highlight'></span>
            </div>
          </div>
        </form>
        <a href='/login'><button className='form_buttons'>Submit</button></a>
      </div>
    </div>
  )
}

export default ForgotPass