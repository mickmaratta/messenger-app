import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const NavbarMobile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="bg-blue-900 flex justify-between px-3 py-5 h-16">
      <span className="xl:inline text-white text-xl font-bold tracking-wider">
        CC Chat
      </span>
      <div className="flex items-center space-x-2">
        <img
          className="w-8 h-8 rounded-full object-cover"
          src={currentUser.photoURL ? currentUser.photoURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" }
          alt=""
        />
        <span className="text-white text-xs md:text-sm">{currentUser.displayName}</span>
        <button className="text-xs sm:text-sm text-slate-100 bg-blue-600 hover:bg-blue-500 transition-all px-2 py-1 rounded-lg" onClick={()=>signOut(auth)}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarMobile;
