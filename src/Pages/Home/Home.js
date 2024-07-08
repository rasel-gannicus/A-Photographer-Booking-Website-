import React from "react";
// import Banner from "./Banner/Banner";
import "./Home.css";
import About from "./About/About";
import ShowCase from "./ShowCase/ShowCase";
import MyServices from "./MyServices/MyServices";
import MyShop from "./MyShop/MyShop";
import Contact from "./Contact/Contact";
import Banner from "../../components/Banner/Banner";
import Testimonials from "./Testimonials/Testimonials";
import HireMe from "./HireMe/HireMe";
import MyGear from "./MyGear/MyGear";

const Home = () => {
  return (
    <div className="home-div app-div">      
      <Banner />

      <About></About>
      <ShowCase></ShowCase>
      <MyServices></MyServices>
      <MyShop></MyShop>
      <Testimonials></Testimonials>
      <HireMe></HireMe>
      <MyGear />
      <Contact></Contact>
    </div>
  );
};

export default Home;
