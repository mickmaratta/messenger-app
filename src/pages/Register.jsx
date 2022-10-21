import React, { useState } from "react";
import Add from "../images/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [err, setErr] = useState();
  const [file, setFile] = useState(null);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password)
      

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErr(true)
      setErrorMessage(errorMessage.split(":")[1]);
    }
  };

  return (
    <div className="bg-sky-50 h-screen flex items-center justify-center">
      <div className="bg-white w-96 px-8 py-5 rounded-md shadow-lg flex flex-col items-center space-y-3">
        <span className="text-2xl font-bold text-blue-900">CC Chat</span>
        <span className="text-sm text-gray-600">Register</span>
        <form
          className="w-full flex flex-col space-y-5"
          onSubmit={handleSubmit}
        >
          <input
            className="border-solid border-b-2 border-gray-300 p-2"
            type="text"
            placeholder="Display Name"
          />
          <input
            className="border-solid border-b-2 border-gray-300 p-2"
            type="email"
            placeholder="Email"
          />
          <input
            className="border-solid border-b-2 border-gray-300 p-2"
            type="password"
            placeholder="Password"
          />
          <input className="hidden" type="file" id="file" onChange={e=>setFile(e.target.files[0])}/>
          <label htmlFor="file" className="flex items-center space-x-2 cursor-pointer">
            {!file && <img className="cursor-pointer w-8" src={Add} alt="" />}
            {file && <span className="text-xs text-blue-500 italic">{file.name}</span>}
            <span className="text-sm text-gray-600">Add an avatar</span>
          </label>
          <button className="bg-blue-700 hover:bg-blue-600 transition-all duration-300 text-white p-3 border-none rounded-lg shadow-2xl cursor-pointer">
            Sign Up
          </button>
        </form>
        {err && (
          <span className="text-red-600 text-sm italic text-center">
            {errorMessage ? errorMessage : "Oops something went wrong! Try again."}
          </span>
        )}
        <Link to="/login"><p className="text-sm text-gray-600 pt-1">Have an account? Login</p></Link>
      </div>
    </div>
  );
};

export default Register;
