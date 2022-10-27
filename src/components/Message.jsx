import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message, lastMessage }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={
        message.senderId !== currentUser.uid
          ? "flex px-3 py-2 items-center"
          : "flex flex-row-reverse px-3 py-2 items-center"
      }
    >
      <div className="hidden md:inline flex flex-col items-center justify-center">
        {message.senderId !== currentUser.uid && (
          <img
            className="w-6 h-6 rounded-full"
            src={data.user.photoURL ? data.user.photoURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"}
            alt=""
          />
        )}
      </div>
      <div
        className={
          message.senderId !== currentUser.uid
            ? "flex flex-col items-start max-w-prose space-y-1"
            : "flex flex-col items-end max-w-prose space-y-1"
        }
      >
        {message.text !== "" && (
          <span
            className={
              message.senderId !== currentUser.uid
                ? "bg-slate-300 px-2 py-1 rounded-3xl rounded-tl-sm max-w-md text-xs sm:text-sm md:text-base ml-3"
                : "bg-blue-600 text-slate-200 px-2 py-1 rounded-3xl rounded-tr-sm max-w-md text-xs sm:text-sm md:text-base mr-3"
            }
          >
            {message.text}
          </span>
        )}
        {message.img && <img className="w-1/3" src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
