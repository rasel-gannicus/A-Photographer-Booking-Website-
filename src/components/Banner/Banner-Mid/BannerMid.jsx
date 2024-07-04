const BannerMid = () => {
  return (
    <div className="banner-mid  ">
      <div className=" relative  w-full md:w-20 md:h-[570px]">
        {/* --- banner image for large screen --- */}

        <img
          src={
            "https://photographer-portfolio-website-advance.vercel.app/static/media/banner-bg.bd7782d8b5405a4d62c3.png"
          }
          alt="banner image"
          // fill
          className=" z-50 bottom-0 absolute hidden md:block"
          quality={100}
          width={800}
          height={500}
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
      </div>
    </div>
  );
};

export default BannerMid;
