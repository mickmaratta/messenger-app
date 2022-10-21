import React from "react";
import Messages from "./Messages"
import Input from "./Input"
import {
  VideoCameraIcon,
  UserPlusIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

const Chat = () => {
  return (
    <div className="basis-2/3 h-full flex flex-col">
      <div className="bg-slate-300 h-16 flex items-center justify-between px-4 py-5">
        <span className="text-blue-900 text-xl">Jack</span>
        <div className="flex items-center space-x-2">
          <VideoCameraIcon className="h-6 w-6 text-blue-800" />
          <UserPlusIcon className="h-6 w-6 text-blue-800" />
          <EllipsisHorizontalIcon className="h-6 w-6 text-blue-800" />
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  );
};

export default Chat;
