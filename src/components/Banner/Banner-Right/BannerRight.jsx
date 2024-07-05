import signature2 from "../../../assets/img/signature bold.png";
import { motion } from "framer-motion";

const BannerRight = () => {
  //   --- frame motion functionality
  const parent = {
    hidden: { x: 900},
    visible: {
      x: 0,
      transition: { ease: "easeInOut", duration: 0.5, staggerChildren: 0.3 },
    },
  };
  const child = {
    hidden: { x: 900},
    visible: {
      x: 0,
      transition : { ease : "easeInOut", type : 'spring', }
    },
  };
  return (
    <div className="banner-right flex-1 ">
      <motion.div
        className=" flex-col justify-center items-center text-center "
        variants={parent}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          variants={child}
          src={signature2}
          alt="signature"
          width={500}
          height={300}
          className="mx-auto hidden md:block"
        />
        <motion.h3
          className=" text-gray-500 text-4xl font-semibold mb-5 md:-mt-10"
          variants={child}
        >
          Book Your <br /> Schedule
        </motion.h3>
        <motion.button
          variants={child}
          variant="outline"
          className="h-12 rounded-full border-black border-2 px-9"
        >
          Lets Talk
        </motion.button>
      </motion.div>
    </div>
  );
};

export default BannerRight;
