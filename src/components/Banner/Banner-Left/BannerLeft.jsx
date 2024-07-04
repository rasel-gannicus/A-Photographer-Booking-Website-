const BannerLeft = () => {
  return (
    <div className=" hidden  md:flex  banner-left flex-1 relative  min-h-[370px] flex-col justify-center items-center  ">
      <div
        className=" absolute -top-5"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <div className="-rotate-[30deg] ">
          <h2 className="text-6xl font-bold text-[#F67055]">20K+</h2>
          <p className="font-bold text-gray-400 ">
            Customers all over <br />
            the world
          </p>
        </div>
      </div>

      <div
        className=" absolute -bottom-5"
        style={{ left: "30%", transform: "translateX(-30%)" }}
      >
        <div className="border-4 p-2 w-32 rounded-md shadow-lg bg-white -rotate-[30deg]  ">
          <img
            src={"https://i.ibb.co/QC9v3FN/wild-6.jpg"}
            alt="banner left"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div
        className=" absolute -bottom-5"
        style={{ left: "60%", transform: "translateX(-60%)" }}
      >
        <div className="border-4 p-2 w-28 rounded-md shadow-lg bg-white -rotate-[30deg]   ">
          <img
            src={
              "https://i.ibb.co/C9cJTwg/mark-pan4ratte-2x5-Eq-Shzu-E8-unsplash-1.jpg"
            }
            alt="banner left"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div
        className=" absolute -bottom-20"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <div className="border-4 p-2 w-28 rounded-md shadow-lg bg-white -rotate-[30deg]   ">
          <img
            src={
              "https://i.ibb.co/z4ZW13j/bekah-allmark-Qt0og-Pnh-GWY-unsplash-1.jpg"
            }
            alt="banner left"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerLeft;
