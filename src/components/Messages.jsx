import React from 'react';
import Message from './Message';

const Messages = () => {
  return (
    <div className='bg-slate-100 flex-1 overflow-auto'>
        <Message />
        <Message owner="false"/>
        <Message />
        <Message />
        <Message owner="false"/>
        <Message />
        <Message />

    </div>
  )
}

export default Messages