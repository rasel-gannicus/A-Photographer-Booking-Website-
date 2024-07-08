import { useAuthState } from "react-firebase-hooks/auth";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import auth from "../../../../Utilities/firebase.init";
import DashboardChart from "./Chart/DashboardChart";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { IoCloudyNightSharp } from "react-icons/io5";


const Dashboard = () => {
  // --- using react-firebase-hook to sign out and to get user data
  const [user] = useAuthState(auth);
  //   console.log(user);
  return (
    <div>
      <DashboardHeader />
      <div className="my-10"></div>

      <div className="flex flex-wrap justify-evenly gap-3 h-full">
        {/* --- profile card ---  */}
        <div className=" min-h-[400px] max-w-[400px] shadow rounded flex justify-center items-center w-full  flex-col gap-4 py-4 h-full">
          <div className="relative w-20 h-20  md:w-40 md:h-40 border-4 rounded-full overflow-hidden ">
            <img src={user?.photoURL} alt="" className="w-64 " />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <button className="btn bg-slate-500 text-white font-semibold">
              Edit Profile
            </button>
            <button className="btn bg-red-700 text-white font-semibold">
              Home Page
            </button>
          </div>

          <hr className=" w-4/5  border-b md:my-10 my-2  border-slate-800" />

          <div className="w-full px-2 flex flex-col justify-center items-center gap-3">
            <p className="font-semibold text-lg">{user?.displayName}</p>
            <p>{user?.email}</p>
            <p className="text-blue-400 font-bold text-center">
              {user?.emailVerified ? "Verified" : "Not Verified"}
            </p>
            <p>Last Login :</p>
            <p className="text-gray-400"> {user?.metadata?.lastSignInTime} </p>
          </div>
        </div>

        {/* --- Dashboard Chart --- */}
        <DashboardChart />
      </div>

      <div className="my-5 justify-center items-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  w-full ">

        <div className=" min-w-[200px] flex flex-col justify-end items-start bg-yellow-300 min-h-[200px] rounded  ">
          <div className=" flex flex-col xl:flex-row justify-center items-center gap-4 p-4 mx-auto">
            <RiCalendarScheduleFill className="w-14 h-14 text-white" />
            <div className="text-white lg:text-left text-center lg:text-lg font-semibold">
              <p className="">Total Bookings</p>
              <p>07</p>
            </div>
          </div>
        </div>

        <div className=" min-w-[200px] flex flex-col justify-end items-start bg-green-400 min-h-[200px] rounded  ">
          <div className=" flex flex-col xl:flex-row justify-center items-center gap-4 p-4 mx-auto">
            <FaShoppingCart className="w-14 h-14 text-white" />
            <div className="text-white lg:text-left text-center lg:text-lg font-semibold">
              <p className="">Items in cart</p>
              <p>20</p>
            </div>
          </div>
        </div>

        <div className=" min-w-[200px] flex flex-col justify-end items-start bg-purple-600 min-h-[200px] rounded  ">
          <div className=" flex flex-col xl:flex-row justify-center items-center gap-4 p-4 mx-auto">
            <IoCloudyNightSharp className="w-14 h-14 text-white" />
            <div className="text-white lg:text-left text-center lg:text-lg font-semibold">
              <p className="">Night Bookings</p>
              <p>110</p>
            </div>
          </div>
        </div>

        <div className=" min-w-[200px] flex flex-col justify-end items-start bg-red-600 min-h-[200px] rounded  ">
          <div className=" flex flex-col xl:flex-row justify-center items-center gap-4 p-4 mx-auto">
            <RiCalendarScheduleFill className="w-14 h-14 text-white" />
            <div className="text-white lg:text-left text-center lg:text-lg font-semibold">
              <p className="">Morning Bookings</p>
              <p>5</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Dashboard;
