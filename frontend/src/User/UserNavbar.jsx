import React from "react";
import profile from "/images/User/profile.jpg";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-base-200 to-base-300 shadow-lg px-10 text-base-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            <ul
              className="px-1 flex text-lg items-center gap-10 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              tabIndex={0}
            >
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
          <div className="flex text-2xl cursor-pointer items-center gap-2">
            <div>
              <img src="/" alt="Logo" />
            </div>
            <span className="font-bold">WavesWash</span>
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
          <div>
            <img
              width={40}
              className="rounded-full border-base-400 border-2 mr-2"
              src={profile}
              alt="Profile Image"
            />
          </div>
          <div className="border-l-2 border-base-400">
            <Link
              to="/login"
              className="border-base-400 px-5 py-2 border rounded-md transition-all hover:transition-colors hover:bg-base-400 hover:text-base-100 ml-3"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
