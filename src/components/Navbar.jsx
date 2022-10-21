import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-900 flex justify-between px-3 py-5 h-16'>
      <span className='hidden xl:inline text-white text-xl font-bold tracking-wider'>CC Chat</span>
      <div className='flex items-center space-x-2'>
        <img className='w-8 h-8 rounded-full' src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg" alt="" />
        <span className='text-white text-xs md:text-sm'>John Norton</span>
        <button className='text-xs sm:text-sm md:text-base text-white bg-sky-600 hover:bg-sky-500 transition-all px-2 py-1 rounded-lg'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar