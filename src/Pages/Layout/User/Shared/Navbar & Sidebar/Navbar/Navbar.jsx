import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import navbarLogo from "../../../../../../assets/img/navbar logo.png";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import userLogo from "../../../../../../assets/img/Icons/user(1).png";
import auth from "../../../../../../Utilities/firebase.init";
import ModalFlowBite from "../../../../../../Utilities/Modal Flowbite/ModalFlowBite";
import { toggleSidebar } from "../../../../../../Redux/Features/user dashboard sidebar/sidebarSlice";
import { toggleAdminRole } from "../../../../../../Redux/Features/admin/adminSlice";

export const Navbars = ({ layout }) => {
  const [userEmail, setUserEmail] = useState("");
  const [admin, setAdmin] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState("");

  // --- controlling mobile menu sidebar with redux
  const sidebarState = useSelector((state) => state.sidebar.sidebarShow);
  const dispatch = useDispatch();

  // -- checking admin role
  const adminState = useSelector((state) => state.admin.adminRole);

  // --- using react-firebase-hook to sign out and to get user data
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user?.email) {
      setUserEmail(user.email);
      setUserDisplayName(user.displayName);
    }
    if (user?.email == "admin@admin.com") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }

    dispatch(toggleAdminRole(admin));
  }, [user, admin, userEmail, userDisplayName]);

  // --- modal for logout
  const [openModal, setOpenModal] = useState(false);

  const handleSidebar = () => {
    dispatch(toggleSidebar(!sidebarState));
  };
  return (
    <nav className=" border-b border-gray-200  bg-white dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-[5000] ">
      <Navbar fluid rounded className="z-50  ">
        <Link to="/" className="hidden md:block">
          <img
            src={navbarLogo}
            className=" w-24 xl:w-40 "
            alt="Photographer Logo"
          />
        </Link>

        {/* --- Button for opening sidebar in mobile view --- */}
        {layout == "user-dashboard" && (
          <button
            onClick={handleSidebar}
            type="button"
            class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            {sidebarState ? (
              <IoMdCloseCircle className="w-6 h-6 text-slate-800" />
            ) : (
              // <img src={hamburgerMenu} alt="" className="w-6" />
              <GiHamburgerMenu className="w-6 h-6 " />
            )}
          </button>
        )}

        <div className="flex gap-4 md:order-2">
          {/* --- guest menu --- */}
          {!user && !adminState && (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img={userLogo} rounded />}
            >
              <DropdownHeader className="text-left">
                <span className="block truncate text-sm font-medium text-blue-800">
                  <Link to="/signup">Register</Link>
                </span>
              </DropdownHeader>
              <DropdownItem>
                {" "}
                <Link
                  to="/login"
                  className="block truncate text-sm font-medium text-blue-800"
                >
                  Log in
                </Link>{" "}
              </DropdownItem>
            </Dropdown>
          )}

          {/* --- logged in user menu --- */}
          {user && !adminState && (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={user?.photoURL} rounded />
              }
            >
              <DropdownHeader className="text-left">
                <span className="block text-sm">{userDisplayName}</span>
                <span className="block truncate text-sm font-medium">
                  {userEmail}
                </span>
              </DropdownHeader>
              <DropdownItem>
                <Link to={"/user/dashboard"}>Profile</Link>{" "}
              </DropdownItem>
              <DropdownItem>
                <Link to={"/"}>Home Page</Link>{" "}
              </DropdownItem>
              <DropdownItem>
                <Link to={"/user/cart"}>Cart</Link>{" "}
              </DropdownItem>
              <DropdownItem>
                <Link to={"/user/bookings"}>Bookings</Link>{" "}
              </DropdownItem>
              <DropdownItem>
                <Link to={"/user/editProfile"}>Edit Profile</Link>{" "}
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem>
                <span
                  onClick={() => setOpenModal(true)}
                  className="bg-pink-700 text-white px-3 py-2 font-semibold rounded text-xs"
                >
                  Sign out
                </span>{" "}
              </DropdownItem>
            </Dropdown>
          )}

          {/* --- admin menu --- */}

          {adminState && (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={user?.photoURL} rounded />
              }
            >
              <DropdownHeader className="text-left">
                <span className="block text-sm">{userDisplayName}</span>
                <span className="block truncate text-sm font-medium">
                  {userEmail}
                </span>
              </DropdownHeader>
              <DropdownItem>
                <Link to={"/admin/dashboard"}>Admin Dashboard</Link>{" "}
              </DropdownItem>
              <DropdownItem>
                <Link to={"/"}>Home Page</Link>{" "}
              </DropdownItem>
              <DropdownItem>
                <Link to={"/admin/editProfile"}>Edit Profile</Link>{" "}
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem>
                <span
                  onClick={() => setOpenModal(true)}
                  className="bg-pink-700 text-white px-3 py-2 font-semibold rounded text-xs"
                >
                  Sign out
                </span>{" "}
              </DropdownItem>
            </Dropdown>
          )}

          {/* <NavbarToggle /> */}
        </div>
        {(layout == "user-homepage" && !adminState) && (
          <>
            {" "}
            <NavbarToggle />{" "}
            <NavbarCollapse>
              <NavbarLink href="#" active className="hidden md:block">
                Home
              </NavbarLink>
              <Link to="/shop">Shop</Link>
              <Link to="/bookNow">Schedules</Link>
              <Link to="/user/cart">Cart</Link>
              <Link to="/user/bookings">Bookings</Link>
            </NavbarCollapse>
          </>
        )}

        {/* --- Navbar Search Box --- */}
        <form action="#" method="GET" className="hidden lg:block lg:pl-2 ">
          <label for="topbar-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1 xl:w-96">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                {" "}
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />{" "}
              </svg>
            </div>
            <input
              type="text"
              name="email"
              id="topbar-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search"
            />
          </div>
        </form>

        <ModalFlowBite openModal={openModal} setOpenModal={setOpenModal} />
      </Navbar>
    </nav>
  );
};
