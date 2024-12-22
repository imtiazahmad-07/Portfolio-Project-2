import React from "react";
import Navbar from "../Navbar/Navbar";  // Make sure the path is correct
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* Navbar stays fixed or sticky at the top */}
      <Navbar />
      
      {/* Routed content will go here */}
      <div > {/* Adjust based on your Navbar height */}
        <Outlet />  {/* This renders your routes like ProductDetail */}
      </div>
    </div>
  );
};

export default Layout;
