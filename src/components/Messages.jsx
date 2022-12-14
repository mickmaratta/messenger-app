import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);
  return (
    <div className="bg-slate-100 flex-1 overflow-auto">
      {messages.map((message, i) => {
        if (i + 1 === messages.length) {
         return <Message message={message} key={message.id} lastMessage={true} />;
        } else {

          return <Message message={message} key={message.id} lastMessage={false} />;
        }
      })}
    </div>
  );
};

export default Messages;
