import React from "react";

const Search = () => {
  return (
    <div>
      <div className="p-2">
        <input
          className="bg-inherit w-full text-sm outline-none placeholder:text-white placeholder:text-xs md:placeholder:textsm "
          type="text"
          placeholder="Find a user..."
        />
      </div>
      <div className="flex items-center space-x-2 p-2 border-solid border-b-2 border-gray-500 cursor-pointer hover:bg-slate-800 transition-all">
        <img
          className="w-8 h-8 rounded-full"
          src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
          alt=""
        />
        <span className="text-white font-bold text-xs sm:text-sm md:text-base">
          Jack Sparrow
        </span>
      </div>
    </div>
  );
};

export default Search;
