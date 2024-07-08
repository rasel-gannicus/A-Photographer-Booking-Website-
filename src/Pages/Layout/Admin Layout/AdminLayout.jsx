import React from "react";
import { Navbars } from "../User/Shared/Navbar & Sidebar/Navbar/Navbar";
import Sidebar from "../User/Shared/Navbar & Sidebar/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      {/* --- Navbar --- */}
      <Navbars layout="admin" />

      {/*  Sidebar  */}
      <Sidebar />

      {/* --- main section --- */}
      <main className="p-4 md:ml-64 h-auto pt-20 mt-20 min-h-screen bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
