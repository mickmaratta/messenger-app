import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

const Home = () => {
  return (
    <div className='bg-sky-50 h-screen flex items-center justify-center'>
      <div className='w-2/3 h-4/5 flex rounded-lg overflow-hidden opacity-90 shadow-2xl'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home