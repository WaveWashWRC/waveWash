import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center text-gray-700 rounded-lg md:px-32 p-5">
        <div className="flex flex-col md:flex-row gap-5 font-medium p-1 text-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-teal-600 transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-teal-600 transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-teal-600 transition-all cursor-pointer"
          >
            Services offered
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-teal-600 transition-all cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>
          @copyright developed by
          <span className="text-brightGreen px-2">Wave wash services</span>| All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
