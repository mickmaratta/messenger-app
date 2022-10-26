import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import MobileHome from "./pages/MobileHome";
import MobileChat from "./pages/MobileChat";

function App() {

  const {currentUser} = useContext(AuthContext);
  const mobileScreen = window.matchMedia('(max-width: 600px)').matches;


  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/login" />
    } 
    return children
  }




  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute>{mobileScreen ? <MobileHome /> : <Home />}</ProtectedRoute>}/>
      <Route path="/chatmobile" element={<MobileChat />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
