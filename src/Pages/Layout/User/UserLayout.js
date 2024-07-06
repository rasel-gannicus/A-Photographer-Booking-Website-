import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar & Sidebar/Navbar/Navbar';
import Sidebar from './Navbar & Sidebar/Sidebar/Sidebar';

const UserLayout = () => {
    return (
        <div>
            <div className="antialiased bg-gray-50 dark:bg-gray-900">
                {/* --- Navbar --- */}
                <Navbar />

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