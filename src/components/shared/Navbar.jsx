import React from "react";
import logoImg from '../../assets/assets/logo.png'
import { NavLink } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    ` py-2 rounded-lg flex items-center px-3  
     ${
       isActive
         ? "bg-green-800 text-white"
         : "text-gray-600 hover:bg-green-100 hover:text-green-600"
     }`;

  return (
    <div className=" max-w-[80%] mx-auto">
      <nav className="    flex justify-between py-4 " >
        
        
        <img src={logoImg} alt="" />

        {/* Menu */}
        <ul className="flex ">
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