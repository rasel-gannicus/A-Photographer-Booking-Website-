
import signature2 from "../../../assets/img/signature bold.png";

const BannerRight = () => {
    return (
        
        <div className="banner-right flex-1 ">
          <div className=" flex-col justify-center items-center text-center ">
            <img
              src={signature2}
              alt="signature"
              width={500}
              height={300}
              className="mx-auto hidden md:block"
            />
            <h3 className=" text-gray-500 text-4xl font-semibold mb-5 md:-mt-10">
              Book Your <br /> Schedule
            </h3>
            <button
              variant="outline"
              className="h-12 rounded-full border-black border-2 px-9"
            >
              Lets Talk
            </button>
          </div>
        </div>
    );
};

export default BannerRight;