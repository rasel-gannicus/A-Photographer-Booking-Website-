

// import testImg from "../../assets/img/street-21.jpg";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import leftArrow from "../../../../assets/img/left-arrow-svgrepo-com.png";
import rightArrow from "../../../../assets/img/right-arrow-svgrepo-com.png";
import { getImg, getShortBio, getText } from "../../../../Utilities/carouselFunction";

const TestimonialCard = () => {
  let [count, setCount] = useState(0);

  function handleClickIncrease() {
    if (count < 2) {
      setCount(++count);
    } else if (count == 2) {
      setCount(0);
    }
  }

  function handleClickDecrease() {
    if (count == 0) {
      setCount(2);
    } else if (count > 0) {
      setCount(--count);
    }
  }

  return (
    <div className="bg-[#4A4B7C] md:w-[80%] relative rounded">
      <div className=" py-14 ps-10 text-gray-200  md:w-[70%]">
        <hr className=" horizontal w-24 border-b-4 mb-10 border-slate-400" />

        {/* --- Testimonial img --- */}
        <TransitionGroup className="">
          <CSSTransition key={count} timeout={500} classNames="fade">
            {getImg(count)}
          </CSSTransition>
        </TransitionGroup>

        {/* --- Testimonial Description --- */}
        <TransitionGroup className="relative my-4 min-h-60 overflow-y-scroll md:overflow-hidden lg:min-h-32">
          <CSSTransition key={count} timeout={500} classNames="fade">
            <p className="text-xl absolute">{getText(count)}</p>
          </CSSTransition>
        </TransitionGroup>

        <hr className=" w-4/5 md:w-full border-b md:my-10 my-4  border-slate-400" />

        {/* --- Client's info --- */}
        <TransitionGroup className="relative min-h-7">
          <CSSTransition key={count} timeout={500} classNames="fade">
            <div className="absolute">{getShortBio(count)}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>

      {/* --- navigation button --- */}
      <div className=" ps-6 pb-6 lg:pb-0 flex lg:justify-center items-center gap-5 lg:absolute lg:bottom-[14%] lg:translate-y-[-14%] lg:right-[25%] lg:translate-x-[-25%]  ">
        <div
          onClick={handleClickIncrease}
          className="border-4 p-2 rounded-full cursor-pointer"
        >
          <img src={leftArrow} alt="" width={30} />
        </div>
        <div
          onClick={handleClickDecrease}
          className="border-4 p-2 rounded-full cursor-pointer"
        >
          <img src={rightArrow} alt="" width={30} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
