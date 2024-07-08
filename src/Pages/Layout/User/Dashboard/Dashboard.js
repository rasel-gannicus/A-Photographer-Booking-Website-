import { useAuthState } from "react-firebase-hooks/auth";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import auth from "../../../../Utilities/firebase.init";
import DashboardChart from "./Chart/DashboardChart";

const Dashboard = () => {
  // --- using react-firebase-hook to sign out and to get user data
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <DashboardHeader />
      <div className="my-10"></div>

      <div className="flex flex-wrap justify-evenly gap-3">
        {/* --- profile card ---  */}
        <div className=" min-h-[400px] max-w-[400px] border-4 rounded flex justify-center items-center w-full  flex-col gap-4 py-4 ">
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
    </div>
  );
};

export default Dashboard;
