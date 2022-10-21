import React from "react";

const Message = ({ owner }) => {
  return (
    <div
      className={
        owner
          ? "flex px-3 py-2 items-center"
          : "flex flex-row-reverse px-3 py-2 items-center"
      }
    >
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-7 h-7 rounded-full"
          src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
          alt=""
        />
        <span className="text-slate-400 text-xs italic ">Just now</span>
      </div>
      <span
        className={
          owner
            ? "bg-slate-300 px-2 py-1 rounded-xl rounded-tl-sm max-w-md ml-5"
            : "bg-blue-600 text-slate-200 px-2 py-1 rounded-xl rounded-tr-sm max-w-md mr-5"
        }
      >
        So cool eh? And what if I wrote something that very long and it had to
        go to another line and keep going and going and going and goinggggg
      </span>
    </div>
  );
};

export default Message;
