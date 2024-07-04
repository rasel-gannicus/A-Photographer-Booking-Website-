import BannerLeft from "./Banner-Left/BannerLeft";
import BannerRight from "./Banner-Right/BannerRight";
import BannerMid from "./Banner-Mid/BannerMid";

const Banner = () => {
  return (
    <div className=" banner-div container relative flex-col justify-center items-center">
      {/* ----------------- Banner Header  --------------------- */}
      <div className=" text-center uppercase  border-b-4 border-t-4">
        <h2 className="  text-3xl lg:text-8xl font-extrabold">
          Photo<span className="text-[#F67055]">graphy</span>{" "}
        </h2>
      </div>

      <div className="flex flex-col md:flex md:flex-row justify-between items-center relative ">
        {/* ----------------- Banner Left Section --------------------- */}
        <BannerLeft />

        {/* ----------------- Banner Mid Section --------------------- */}

        <BannerMid />

        {/* ----------------- Banner Right Section --------------------- */}
        <BannerRight />
      </div>
    </div>
  );
};

export default Banner;
