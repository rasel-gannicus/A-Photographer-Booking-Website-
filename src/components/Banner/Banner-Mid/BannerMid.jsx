import {motion} from 'framer-motion'

const BannerMid = () => {

  const imageMotion = {
    hidden : {x : 5000, rotate : 190 },
    visible : { x : 0, rotate : 0, transition : {
      ease : 'easeInOut' ,
      delay : 0.3,
      duration : 1,
      type : 'spring'
    } }
  }
  return (
    <div className="banner-mid ">
      <motion.div className=" relative  w-full md:w-20 md:h-[570px]"
        variants={imageMotion}
        initial = 'hidden'
        animate = 'visible'
        >
        {/* --- banner image for large screen --- */}

        <img
          src={
            "https://photographer-portfolio-website-advance.vercel.app/static/media/banner-bg.bd7782d8b5405a4d62c3.png"
          }
          alt="banner image"
          // fill
          className=" z-50 bottom-0 absolute hidden md:block"
          style={{
            maxWidth: "550px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        {/* --- banner image for mobile screen --- */}
        <img
          src={
            "https://photographer-portfolio-website-advance.vercel.app/static/media/banner-bg.bd7782d8b5405a4d62c3.png"
          }
          alt="banner image"
          // fill
          className=" z-50 md:hidden"
          quality={100}
          width={600}
          height={500}
          // style={{
          //   maxWidth: "550px",
          // }}
        />
      </motion.div>
    </div>
  );
};

export default BannerMid;
