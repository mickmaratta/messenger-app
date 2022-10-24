import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase';
import Message from './Message';

const Messages = () => {
  const [messages, setMessages] = useState();
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data())
    })

    return () => {
      unsub()
    }
  }, [data.chatId])
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