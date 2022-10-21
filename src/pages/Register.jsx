import React from 'react';
import Add from "../images/addAvatar.png"

const Register = () => {
  return (
    <div className='bg-indigo-300 h-screen flex items-center justify-center'>
        <div className='bg-white w-96 px-8 py-5 rounded-md shadow-lg flex flex-col items-center space-y-3'>
            <span className='text-2xl font-bold text-indigo-900'>CC Chat</span>
            <span className='text-sm text-gray-600'>Register</span>
            <form className='w-full flex flex-col space-y-5' >
                <input className="border-solid border-b-2 border-gray-300 p-2" type="text" placeholder='Display Name' />
                <input className="border-solid border-b-2 border-gray-300 p-2" type="email" placeholder='Email'/>
                <input className="border-solid border-b-2 border-gray-300 p-2" type="password" placeholder='Password' />
                <input className='hidden' type="file" id="file" />
                <label htmlFor="file" className='flex items-center space-x-2'>
                    <img className='cursor-pointer w-8' src={Add} alt="" />
                    <span className='text-sm text-gray-600'>Add an avatar</span>
                </label>
                <button className='bg-indigo-500 hover:bg-indigo-400 transition-all text-white p-3 border-none rounded-lg shadow-2xl cursor-pointer'>Sign Up</button>
            </form> 
            <p className='text-sm text-gray-600 pt-1'>Have an account? Login</p>
        </div>
    </div>
  )
}

export default Register