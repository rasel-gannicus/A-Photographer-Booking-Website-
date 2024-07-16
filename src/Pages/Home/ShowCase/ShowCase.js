import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PortraitShowcase from "./PortraitShowcase/PortraitShowcase";
import PotraitDisplay from "./PotraitDisplay/PotraitDisplay";
import "./ShowCase.css";
import ShowcasePopup from "./ShowcasePopup/ShowcasePopup";
import StreetShowcase from "./StreetShowcase/StreetShowcase";
import WeddingShowcase from "./WeddingShowcase/WeddingShowcase";
import WildlifeShowcase from "./WildlifeShowcase/WildlifeShowcase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import StreetDisplay from "./StreetDisplay/StreetDisplay";
import WeddingDisplay from "./WeddingDisplay/WeddingDisplay";
import WildDisplay from "./WildDisplay/WildDisplay";
import { useInView } from "react-intersection-observer";
import showCaseMidImg from "../../../assets/img/services-03-free-img.png";

const ShowCase = () => {
  // --- framer motion animation functionality
  const [controls, setControls] = useState("hidden");
  const [controls2, setControls2] = useState("hidden");
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  const fromLeft = {
    hidden: { x: -900, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };
  const fromRight = {
    hidden: { x: 900, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  useEffect(() => {
    if (inView) {
      setControls("visible");
    }
    if (!inView) {
      setControls("hidden");
    }

    if (inView2) {
      setControls2("visible");
      //   console.log("in");
    }
    if (!inView2) {
      setControls2("hidden");
      //   console.log("out");
    }
  }, [controls, inView, controls2, inView2]);

  // this function will show popup display for potrait photography works
  function showPortrait() {
    const popupParent = document.querySelector(".showcase-popup-parent");
    const showPopPotrait = document.querySelector(".show-popup-portrait");

    popupParent.classList.add("active");
    showPopPotrait.classList.add("active");
  }

  // this function will show popup display for street photography works
  function showStreet() {
    const popupParent = document.querySelector(".showcase-popup-parent");
    popupParent.classList.add("active");

    const showStreet = document.querySelector(".show-popup-street");
    showStreet.classList.add("active");
  }

  // this function will show popup display for Wedding photography works
  function showWedding() {
    const popupParent = document.querySelector(".showcase-popup-parent");
    popupParent.classList.add("active");

    const showWedding = document.querySelector(".show-popup-wedding");
    showWedding.classList.add("active");
  }

  // this function will show popup display for Wedding photography works
  function showWild() {
    const popupParent = document.querySelector(".showcase-popup-parent");
    popupParent.classList.add("active");

    const showWild = document.querySelector(".show-popup-wild");
    showWild.classList.add("active");
  }

  //-------------------------- this function will hide the popup display when clicking x button
  function hidePopup() {
    const popupParent = document.querySelector(".showcase-popup-parent");
    popupParent.classList.remove("active");

    const showPopPotrait = document.querySelector(".show-popup-portrait");
    showPopPotrait.classList.remove("active");

    const showStreet = document.querySelector(".show-popup-street");
    showStreet.classList.remove("active");

    const showWedding = document.querySelector(".show-popup-wedding");
    showWedding.classList.remove("active");

    const showWild = document.querySelector(".show-popup-wild");
    showWild.classList.remove("active");
  }
  return (
    <div className="container showCase-div mx-auto  relative">
      <h2 className="fw-bold mt-20 text-4xl md:text-6xl font-bold">My Works</h2>

      <div
        className="md:grid grid-cols-2 overflow-hidden items-center justify-center "
        ref={ref}
      >
        <motion.div
          variants={fromLeft}
          initial={controls}
          animate={controls}
          onClick={showPortrait}
          draggable
          className=" clickable-div mx-auto"
        >
          <div className="layer-parent max-w-[400px] ">
            <PortraitShowcase></PortraitShowcase>
            <div className="layer">
              <h1 className=" text-2xl md:text-4xl">
                Portrait <br /> Photography
              </h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fromRight}
          initial={controls}
          animate={controls}
          onClick={showStreet}
          draggable
          className=" clickable-div mx-auto"
        >
          <div className=" layer-parent max-w-[400px]">
            <StreetShowcase></StreetShowcase>
            <div className="layer layer-2">
              <h1 className=" text-2xl md:text-4xl">
                Street <br /> Photography
              </h1>
            </div>
          </div>
        </motion.div>
      </div>

      {/* -------------- mid image section ------------- */}
      <div className="bg-green-400 w-5 h-5 mx-auto showcase-mid-div   overflow-auto">
        <img
          src={showCaseMidImg}
          alt=""
          className="absolute  top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] max-w-[530px]   "
        />
      </div>

      <div className="md:grid grid-cols-2 my-4 overflow-hidden" ref={ref2}>
        <motion.div
          variants={fromLeft}
          initial={controls2}
          animate={controls2}
          onClick={showWedding}
          draggable
          className=" clickable-div mx-auto"
        >
          <div className=" layer-parent max-w-[400px]">
            <WeddingShowcase></WeddingShowcase>
            <div className="layer layer-3 ">
              <h1 className=" text-2xl md:text-4xl">
                Wedding <br /> Photography
              </h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fromRight}
          initial={controls2}
          animate={controls2}
          onClick={showWild}
          draggable
          className=" clickable-div mx-auto"
        >
          <div className=" layer-parent max-w-[400px]">
            <WildlifeShowcase></WildlifeShowcase>
            <div className="layer layer-4">
              <h1 className=" text-2xl md:text-4xl">
                Wildlife <br /> Photography
              </h1>
            </div>
          </div>
        </motion.div>
      </div>

      {/*-------------- Div for  Pop up display ---------------*/}
      <div className="showcase-popup-parent">
        {/*-------------- Div for Potrait photography works Pop up display ---------------*/}
        <div className="show-popup-portrait">
          <PotraitDisplay></PotraitDisplay>
          <div className="close-icons ">
            <span onClick={hidePopup} className="close-icon rounded-full">
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>{" "}
            </span>
          </div>
        </div>

        {/*--------------------- Div for Street photography works Pop up display ---------------*/}
        <div className="show-popup-street">
          <StreetDisplay></StreetDisplay>
          <div className="close-icons">
            <span onClick={hidePopup} className="close-icon">
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>{" "}
            </span>
          </div>
        </div>

        {/*--------------------- Div for Wedding photography works Pop up display ---------------*/}
        <div className="show-popup-wedding">
          <WeddingDisplay></WeddingDisplay>
          <div className="close-icons">
            <span onClick={hidePopup} className="close-icon">
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>{" "}
            </span>
          </div>
        </div>

        {/*--------------------- Div for Wild photography works Pop up display ---------------*/}
        <div className="show-popup-wild">
          <WildDisplay></WildDisplay>
          <div className="close-icons">
            <span onClick={hidePopup} className="close-icon">
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
