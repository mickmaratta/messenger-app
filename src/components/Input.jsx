import { PaperClipIcon, PhotoIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Input = () => {
  return (
    <div className='h-16 bg-white flex items-center justify-between px-3'>
      <input className='text-slate-900 text-md placeholder:text-slate-700 w-full outline-none' type="text" placeholder='Type something...' />
      <div className='flex space-x-2'>
        <PaperClipIcon className="h-6 w-6 text-blue-800"/>
        <PhotoIcon className="h-6 w-6 text-blue-800"/>
        <button className='bg-blue-800 px-3 py-1 rounded-lg text-white hover:bg-blue-700 transition-all duration-300'>Send</button>
      </div>
    </div>
  )
}

export default Input