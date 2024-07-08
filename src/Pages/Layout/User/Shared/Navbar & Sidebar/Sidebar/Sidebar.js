import { IoMdHome } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import UserSidebar from "./User Sidebar/UserSidebar";

const Sidebar = () => {
  // --- showing or hiding sidebar with redux
  const sidebarState = useSelector((state) => state.sidebar.sidebarShow);
  // -- checking admin role
  const adminState = useSelector((state) => state.admin.adminRole);
  return !adminState ? (
    // ------------------------- user side bar ------------------------------------
    <UserSidebar />
  ) : (

    // -------------------------- admin side bar --------------------------------------
    <AdminSidebar />
  );
};

export default Sidebar;
