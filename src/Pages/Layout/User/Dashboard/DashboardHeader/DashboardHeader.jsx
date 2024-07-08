import React from "react";
import navbarLogo from "../../../../../assets/img/navbar logo.png";
import "./style.css";
import { useSelector } from "react-redux";

const DashboardHeader = () => {
  // -- checking admin role
  const adminState = useSelector((state) => state.admin.adminRole);
  return (
    <div>
      {!adminState ? (
        <div className="dashboard-header  min-h-[250px]  w-full relative rounded overflow-hidden shadow">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 absolute top-0 bottom-0 left-0 right-0 opacity-90  text-white md:text-4xl font-semibold px-10 flex justify-end items-center">
            <div className=" text-right flex justify-end flex-col items-end gap-1 ">
              <h2>Your profile dashboard</h2>
              <p className="md:text-lg text-sm font-normal">
                All the items together here
              </p>
              <div className=" bg-white md:w-32 w-20 rounded-lg shadow-2xl p-1">
                <img src={navbarLogo} alt="" className="w-full" />
              </div>
            </div>
          </div>
          {/* <div className="bg-green-400 w-40 h-40 rounded-full border-black border-4 p-3 absolute left-0 bottom-0"></div> */}
        </div>
      ) : (
        <div className="dashboard-header  min-h-[250px]  w-full relative rounded overflow-hidden shadow">
          <div className="bg-gradient-to-r from-red-800 to-pink-500 absolute top-0 bottom-0 left-0 right-0 opacity-90  text-white md:text-4xl font-semibold px-10 flex justify-end items-center">
            <div className=" text-right flex justify-end flex-col items-end gap-1 ">
              <h2>Admin dashboard</h2>
              <p className="md:text-lg text-sm font-normal">
                Manage your website from here
              </p>
              {/* <div className=" bg-white md:w-32 w-20 rounded-lg shadow-2xl p-1">
                <img src={navbarLogo} alt="" className="w-full" />
              </div> */}
            </div>
          </div>
          {/* <div className="bg-green-400 w-40 h-40 rounded-full border-black border-4 p-3 absolute left-0 bottom-0"></div> */}
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
