import React from "react";
import logoImg from '../../assets/assets/logo.png'
import { NavLink } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 
     ${
       isActive
         ? "bg-green-800 text-white"
         : "text-gray-600 hover:bg-green-100 hover:text-green-600"
     }`;

  return (
    <div className="border-b-4 border-blue-500">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 bg-gray-100" container mx-auto>
        
        
        <img src={logoImg} alt="" />

        {/* Menu */}
        <ul className="flex gap-4">
          <li>
            <NavLink to="/" className={linkClass}>
              <RiHome2Line />Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className={linkClass}>
             <IoTimeOutline />Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className={linkClass}>
              <ImStatsDots/> Stats
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;