import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "././Shared/Navbar & Sidebar/Sidebar/Sidebar";
import { Navbars } from "./Shared/Navbar & Sidebar/Navbar/Navbar";

const UserLayout = () => {
  return (
    <div>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        
        {/* --- Navbar --- */}
        <Navbars />

        {/*  Sidebar  */}
        <Sidebar />

        {/* --- main section --- */}
        <main className="p-4 md:ml-64 h-auto pt-20 mt-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
