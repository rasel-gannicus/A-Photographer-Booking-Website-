import { useNavigate } from 'react-router-dom';
import './HireMe.css'

const HireMe = () => {
  const navigate = useNavigate() ;
  return (
    <div className=" container  hire-me-div py-[300px] md:bg-right text-left">
      <h2 className=" text-4xl md:text-8xl text-[#4A4B7C] font-bold">
        Hire Me for Your <br />
        Next Project
      </h2>
      <button
        onClick={() => navigate('/bookNow')}
        className="px-3 py-3 text-lg mt-10  shadow-2xl bg-[#4A4B7C] text-white rounded font-semibold hover:bg-[#7375c8]   transition-all"
      >
        Hire Me
      </button>
    </div>
  );
};

export default HireMe;
