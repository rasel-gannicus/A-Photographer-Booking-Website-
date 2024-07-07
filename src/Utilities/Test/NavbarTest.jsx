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
import navbarLogo from '../../assets/img/navbar logo.png'
import { activeSidebar, toggleSidebar } from "../../Redux/Features/user dashboard sidebar/sidebarSlice";
import hamburgerMenu from '../../assets/img/Icons/hamburger-menu-svgrepo-com(1).svg';
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

export function NavbarTest() {
  const [userEmail, setUserEmail] = useState("");
  const [userDisplayName, setUserDisplayName] = useState("");
  // --- using react-firebase-hook to sign out and to get user data
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user?.email) {
      setUserEmail(user.email);
      setUserDisplayName(user.displayName);
    }
  }, [user]);

  // --- logging out user
  const handleLogout = (e) => {
    e.preventDefault();
    let confirmation = window.confirm("Are You sure you want to log out ?");
    if (confirmation) {
      signOut(auth)
        .then(() => {
          console.log("Sign Out Successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // --- controlling mobile sidebar with redux
  const sidebarState = useSelector(state => state.sidebar.sidebarShow);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSidebar(!sidebarState));
  }
  return (
    <Navbar fluid rounded className="z-50  ">
      <Link to="/" className="hidden md:block">
        <img
          src={navbarLogo}
          className=" w-24 md:w-40 "
          alt="Flowbite React Logo"
        />
      </Link>

      {/* --- Button for opening sidebar in mobile view --- */}
      <button onClick={handleSidebar} type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        {sidebarState ? <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg> : <img src={hamburgerMenu} alt="" className="w-6" />}

      </button>

      {/* --- Navbar Search Box --- */}
      <form action="#" method="GET" className="hidden lg:block lg:pl-2">
        <label for="topbar-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1 lg:w-96">
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

      {/* --- search bar for mobile ---- */}
      <button
        id="toggleSidebarMobileSearch"
        type="button"
        className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span className="sr-only">Search</span>
        {/* {/* <!-- Search icon --> */}
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>

      <div className="flex gap-4 md:order-2">
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </NavbarCollapse>

        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          {user && <DropdownHeader className="text-left">
            <span className="block text-sm">{userDisplayName}</span>
            <span className="block truncate text-sm font-medium">
              {userEmail}
            </span>
          </DropdownHeader>}
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        {/* <NavbarToggle /> */}

      </div>


    </Navbar>
  );
}
