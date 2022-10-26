import React, { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { useNavigate } from "react-router-dom";

const ChatsMobile = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const navigate = useNavigate()

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
    navigate('/chatmobile')
  };

  return (
    <div>
      {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
        <div
          onClick={() => handleSelect(chat[1].userInfo)}
          key={chat[0]}
          className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-slate-800 transition-all"
        >
          <img
            className="w-8 h-8 rounded-full"
            src={chat[1].userInfo.photoURL}
            alt=""
          />
          <div className="flex flex-col space-y-1">
            <span className="text-white font-bold text-xs sm:text-sm md:text-base">
              {chat[1].userInfo.displayName}
            </span>
            <span className="text-white italic text-xs">
              {chat[1].lastMessage?.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatsMobile;
