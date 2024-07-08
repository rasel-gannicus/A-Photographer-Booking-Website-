import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Testimonials = () => {
  // --- framer motion animation functionality
  const [controls, setControls] = useState("hidden");
  const [ref, inView] = useInView();

  const parent = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeInOut", duration: 1, staggerChildren: 0.2 },
    },
  };

  useEffect(() => {
    if (inView) {
      setControls("visible");
    }
    if (!inView) {
      setControls("hidden");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      variants={parent}
      initial={controls}
      animate={controls}
      className="md:flex md:flex-col justify-start items-start my-20 container"
    >
      <hr className="horizontal w-24  border-b-8 mb-4 border-gray-500" />
      <h2 className="mb-10 text-gray-400 text-4xl font-bold ">
        What my <span className="text-[#4A4B7C] ">Clients</span> say <br />
        about my work
      </h2>
      <TestimonialCard />
    </motion.div>
  );
};

export default Testimonials;
