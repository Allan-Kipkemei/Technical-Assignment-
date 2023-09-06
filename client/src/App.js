import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Banner from "./components/Banner";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import DiscoverNow from "./components/DiscoverNow";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

// Create a simple authentication context


export default function App() {
  return (
  
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="*" element={<NotFound />} />
          {/* Use the ProtectedRoute component for /discover */}
         <Route path='/discover' element={<DiscoverNow/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </>

  );
}
