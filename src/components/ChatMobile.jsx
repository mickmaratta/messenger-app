import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import {
  VideoCameraIcon,
  UserPlusIcon,
  EllipsisHorizontalIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";
import { ChatContext } from "../context/ChatContext";
import { useNavigate } from "react-router-dom";

const ChatMobile = () => {
  const navigate = useNavigate();
  const { data } = useContext(ChatContext);

  return (
    <div className="basis-2/3 h-full flex flex-col">
      <div className="bg-slate-300 h-16 flex items-center justify-between px-4 py-5">
        <ArrowLeftIcon onClick={() => navigate(-1)} className="h-6 w-6 text-blue-800" />
        <span className="text-blue-900 text-lg md:text-xl">
          {data.user?.displayName}
        </span>
        <div className="flex items-center space-x-2">
          <VideoCameraIcon className="h-4 w-4 md:h-6 md:w-6 text-blue-800" />
          <UserPlusIcon className="h-4 w-4 md:h-6 md:w-6 text-blue-800" />
          <EllipsisHorizontalIcon className="h-4 w-4 md:h-6 md:w-6 text-blue-800" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default ChatMobile;
