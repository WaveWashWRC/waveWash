// Navbar.js
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-5 px-5 md:px-32 text-gray-950">
        <div>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="font-semibold text-2xl p-1 cursor-pointer text-teal-600"
          >
            WaveWash
          </ScrollLink>
        </div>

        <div className="hidden md:flex gap-5 font-medium p-1 text-lg text-gray-950">
          <RouterLink
            to="/login"
            className="hover:text-teal-600 transition-all cursor-pointer"
          >
            Be a Vendor
          </RouterLink>
          <RouterLink
            to="/request-service"
            className="hover:text-teal-600 transition-all cursor-pointer"
          >
            Request Service
          </RouterLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Contact Us
          </ScrollLink>
        </div>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className="p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#fdfdfd] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <RouterLink
          to="/become-vendor"
          className="hover:text-teal-600 transition-all cursor-pointer"
        >
          Be a Vendor
        </RouterLink>
        <RouterLink
          to="/request-service"
          className="hover:text-teal-600 transition-all cursor-pointer"
        >
          Request Service
        </RouterLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-teal-600 transition-all cursor-pointer"
        >
          Contact Us
        </ScrollLink>
      </div>
    </div>
  );
};

export default Navbar;
