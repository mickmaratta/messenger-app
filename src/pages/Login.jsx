import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [err, setErr] = useState();
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErr(true);
      setErrorMessage(errorMessage.split(":")[1]);
    }
  };

  return (
    <div className="bg-sky-50 h-screen flex items-center justify-center">
      <div className="bg-white w-96 px-8 py-5 rounded-md shadow-lg flex flex-col items-center space-y-3">
        <span className="text-2xl font-bold text-blue-900">CC Chat</span>
        <span className="text-sm text-gray-600">Login</span>
        <form
          className="w-full flex flex-col space-y-5"
          onSubmit={handleSubmit}
        >
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
          <button className="bg-blue-700 hover:bg-blue-600 transition-all text-white p-3 border-none rounded-lg shadow-2xl cursor-pointer">
            Sign In
          </button>
        </form>
        {err && (
          <span className="text-red-600 text-sm italic text-center">
            {errorMessage
              ? errorMessage
              : "Oops something went wrong! Try again."}
          </span>
        )}
        <Link to="/register">
          <p className="text-sm text-gray-600 pt-1">
            Don't have an account? Register
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
