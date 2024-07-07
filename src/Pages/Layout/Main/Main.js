import React from "react";
import Header from "../../Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import CartPopup from "../../../Utilities/CartPopup/CartPopup";
import Navbar from "../../Shared/Navbar/Navbar";
import { Navbars } from "../User/Shared/Navbar & Sidebar/Navbar/Navbar";

const Main = () => {
  return (
    <div className="home-div">
      {/* <Header></Header> */}
      <Navbars layout="user-homepage" />
      <div className=" my-28 pb-4">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
      <CartPopup></CartPopup>
    </div>
  );
};

export default Main;
