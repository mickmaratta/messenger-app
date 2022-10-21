import React from "react";

const Chats = () => {
  return (
    <div>
      <div className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-slate-800 transition-all">
        <img
          className="w-8 h-8 rounded-full"
          src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
          alt=""
        />
        <div className="flex flex-col space-y-1">
          <span className="text-white font-bold text-md">Jack Sparrow</span>
          <span className="text-white font-bold text-xs">C u soon!</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-slate-800 transition-all">
        <img
          className="w-8 h-8 rounded-full"
          src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
          alt=""
        />
        <div className="flex flex-col space-y-1">
          <span className="text-white font-bold text-md">Jack Sparrow</span>
          <span className="text-white font-bold text-xs">C u soon!</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-slate-800 transition-all">
        <img
          className="w-8 h-8 rounded-full"
          src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
          alt=""
        />
        <div className="flex flex-col space-y-1">
          <span className="text-white font-bold text-md">Jack Sparrow</span>
          <span className="text-white font-bold text-xs">C u soon!</span>
        </div>
      </div>
    </div>
  );
};

export default Chats;
