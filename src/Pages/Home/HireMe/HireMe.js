import { useNavigate } from 'react-router-dom';
import './HireMe.css'

const HireMe = () => {
  const navigate = useNavigate() ;
  return (
    <div className=" container  hire-me-div py-[300px] md:bg-right text-right">
      <h2 className=" text-4xl md:text-8xl text-[#4A4B7C] font-bold">
        Hire Me for Your <br />
        Next Project
      </h2>
      <button
        onClick={() => navigate('/bookNow')}
        className="px-8 py-3 text-xl mt-10  shadow-2xl bg-[#EC228A] text-white rounded font-semibold hover:bg-[#7375c8]   transition-all duration-300 "
      >
        Hire Me
      </button>
    </div>
  );
};

export default HireMe;
