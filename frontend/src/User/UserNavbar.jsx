import React, { useState } from "react";
import profile from "/images/User/profile.jpg";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";

const UserNavbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div>
      <div className="navbar bg-gradient-to-r from-base-200 to-base-300 shadow-lg md:px-10 text-base-400">
        <div className="navbar-start">
          <div className="dropdown z-2">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {isDropdownVisible && (
              <ul
                className="px-1 flex text-base items-center menu menu-sm dropdown-content mt-3 z-[1] py-2 shadow bg-base-100 rounded-box w-40"
                tabIndex={0}
              >
                <Link
                  to="/user/dashboard"
                  className="hover:text-base-300 transition-colors px-4 py-2 rounded-md hover:bg-base-400/10"
                >
                  Dashboard
                </Link>
                <Link
                  to="/user/book-service"
                  className="hover:text-base-300 transition-colors px-4 py-2 rounded-md hover:bg-base-400/10"
                >
                  Book a Service
                </Link>
                <Link
                  to="/user/post-an-ad"
                  className="hover:text-base-300 transition-colors px-4 py-2 rounded-md hover:bg-base-400/10"
                >
                  Post an Ad
                </Link>
              </ul>
            )}
          </div>
          <div className="flex text-2xl cursor-pointer items-center md:gap-2">
            <Link to="/user/dashboard">
              <img
                src={logo}
                alt="Logo"
                className="rounded-full w-8 h-8 md:w-12 md:h-12"
              />
            </Link>
            <span className="font-bold hidden md:flex">WavesWash</span>
          </div>{" "}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex text-lg items-center gap-10">
            <Link
              to="/user/dashboard"
              className="hover:text-base-100 transition-colors px-4 py-2 rounded-md hover:bg-base-400/20"
            >
              Dashboard
            </Link>
            <Link
              to="/user/book-service"
              className="hover:text-base-100 transition-colors px-4 py-2 rounded-md hover:bg-base-400/20"
            >
              Book a Service
            </Link>
            <Link
              to="/user/post-an-ad"
              className="hover:text-base-100 transition-colors px-4 py-2 rounded-md hover:bg-base-400/20"
            >
              Post an Ad
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="flex items-center cursor-pointer"
              onClick={toggleDropdown}
            >
              <img
                className="rounded-full border-base-400 border-2 mr-4 w-8 md:w-10"
                src={profile}
                alt="Profile Image"
              />
            </label>
            {isDropdownVisible && (
              <ul
                className="px-1 flex text-base items-center menu menu-sm dropdown-content mt-3 z-[1] py-2 shadow bg-base-100 rounded-box w-40"
                tabIndex={0}
              >
                <Link
                  to="/user/edit-profile"
                  className="hover:text-base-300 transition-colors px-4 py-2 rounded-md hover:bg-base-400/10"
                >
                  Edit Profile
                </Link>
                <Link
                  to="/user/history"
                  className="hover:text-base-300 transition-colors px-4 py-2 rounded-md hover:bg-base-400/10"
                >
                  History
                </Link>
                <Link
                  to="/login"
                  className="hover:text-base-300 transition-colors px-4 py-2 rounded-md hover:bg-base-400/10"
                >
                  Logout
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
