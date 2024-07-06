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
import { Link } from "react-router-dom";
import navbarLogo from '../../assets/img/navbar logo.png'

export function NavbarTest() {
  return (
    <Navbar fluid rounded className="z-50  py-0 ">
      <Link to="/">
        <img
          src={navbarLogo}
          className=" w-24 md:w-40 "
          alt="Flowbite React Logo"
        />

      </Link>
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
          <DropdownHeader className="text-left">
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
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
