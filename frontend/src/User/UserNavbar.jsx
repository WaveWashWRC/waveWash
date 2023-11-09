import React from "react";
import profile from "/images/profile.jpg";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-base-200 to-base-300 shadow-md w-full md:py-5 md:px-7 sticky px-5 flex justify-around items-center">
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <div>
            <img src="/" alt="Logo" />
          </div>
          <span className="font-bold">WavesWash</span>
        </div>
        <div>
          <ul className="flex text-lg items-center gap-10 ">
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
        <div className="flex justify-center items-center gap-2">
          <div>
            <img
              width={40}
              className="rounded-full border-base-400 border-2 mr-2"
              src={profile}
              alt="Profile Image"
            />
          </div>
          <div className="border-l-2 border-base-400">
            <button className="border-base-400 px-5 py-2 border rounded-md transition-all hover:transition-colors hover:bg-base-400 hover:text-base-100 ml-5">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
