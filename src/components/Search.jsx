import React, { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [username, setUsername] = useState();
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div>
      <div className="p-2 relative">
        <input
          className="bg-inherit w-full text-sm outline-none text-slate-200 placeholder:text-slate-200 placeholder:text-xs md:placeholder:text-sm "
          type="text"
          placeholder="Find a user..."
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      {username && <span className="text-slate-400 italic text-xs absolute top-2 right-2">Press Enter</span>}
      </div>
      {user && <div className="flex items-center space-x-2 p-2 border-solid border-b-2 border-gray-500 cursor-pointer hover:bg-slate-800 transition-all">
        <img
          className="w-8 h-8 rounded-full"
          src={user.photoURL}
          alt=""
        />
        <span className="text-white font-bold text-xs sm:text-sm md:text-base">
          {user.displayName}
        </span>
      </div>}
    </div>
  );
};

export default Search;
