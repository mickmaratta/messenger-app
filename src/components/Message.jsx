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
      <div className="hidden md:inline flex flex-col items-center justify-center">
        <img
          className="w-6 h-6 rounded-full"
          src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
          alt=""
        />
        <span className="text-slate-400 text-xs italic ">Just now</span>
      </div>
      <div className="flex flex-col max-w-prose space-y-2">
        <span
          className={
            owner
              ? "bg-slate-300 px-2 py-1 rounded-3xl rounded-tl-sm max-w-md text-xs sm:text-sm md:text-base ml-3"
              : "bg-blue-600 text-slate-200 px-2 py-1 rounded-3xl rounded-tr-sm max-w-md text-xs sm:text-sm md:text-base mr-3"
          }
        >
          So cool eh? And what if I wrote something that very long and it had to
          go to another line and keep going and going and going and goinggggg
        </span>
        {/* <img className="" src="https://picsum.photos/id/237/536/354" alt="" /> */}
      </div>
    </div>
  );
};

export default Message;
