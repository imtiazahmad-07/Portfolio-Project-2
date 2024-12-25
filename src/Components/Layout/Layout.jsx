import React from "react";
import Navbar from "../Navbar/Navbar";  // Make sure the path is correct
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div > 
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout;
