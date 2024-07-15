import React from "react";
import usePackages from "../../Utilities/hooks/usePackages";
import serviceImg from "../../assets/img/services-02-free-img.png";
import WeddingPackages from "../Home/MyServices/WeddingPackages/WeddingPackages";

const BookNowPage = () => {
  const [data, setData] = usePackages();
  // console.log(data);

  return (
    <div className=" md:grid grid-cols-3">
      <div className="service-div  relative order-1 min-h-[757px]">
        <h2 className=" text-6xl md:text-7xl font-bold text-[#4A4B7C]">
          Services
        </h2>
        <img
          src={serviceImg}
          alt="service img"
          quality={100}
          className="md:absolute top-14"
        />
      </div>

      <div className="service-div mx-auto flex flex-col gap-y-5 my-20 items-center">
        {data.length > 0 &&
          data.map(
            (index) =>
              index.mainCatagory == "wedding" && (
                <WeddingPackages index={index} key={index.id}></WeddingPackages>
              )
          )}
      </div>

      <div className="service-div flex flex-col gap-y-5 items-center order-1 my-20">
        {data.length > 0 &&
          data.map(
            (index) =>
              index.mainCatagory == "portrait" && (
                <WeddingPackages index={index} key={index.id}></WeddingPackages>
              )
          )}
      </div>
    </div>
  );
};

export default BookNowPage;
