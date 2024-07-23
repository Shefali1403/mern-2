import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import { Logout } from "./pages/Logout";
const App=()=>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="*" element={<Error/>}/>
        
      </Routes>
      <Footer/>
    </>
  );
}
export default App;
