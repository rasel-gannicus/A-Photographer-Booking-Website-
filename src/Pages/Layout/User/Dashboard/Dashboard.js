import { useAuthState } from "react-firebase-hooks/auth";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import auth from "../../../../Utilities/firebase.init";
import DashboardChart from "./Chart/DashboardChart";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { IoCloudyNightSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";

const Dashboard = () => {
  // --- using react-firebase-hook to sign out and to get user data
  const [user] = useAuthState(auth);

  // -- checking admin role
  const adminState = useSelector((state) => state.admin.adminRole);

  //   console.log(user);
  return (
    <>
      {!adminState && <UserDashboard />} 
      {adminState && <AdminDashboard />}
    </>
  );
};

export default Dashboard;
