import './HireMe.css'

const HireMe = () => {
  return (
    <div className=" container  hire-me-div py-[300px] md:bg-right text-left">
      <h2 className=" text-4xl md:text-8xl text-[#4A4B7C] font-bold">
        Hire Me for Your <br />
        Next Project
      </h2>
      <button
        variant="secondary"
        className="px-3 py-3 text-lg mt-10  shadow-2xl bg-[#4A4B7C] text-white rounded font-semibold"
      >
        Hire Me
      </button>
    </div>
  );
};

export default HireMe;
