import React from "react";
import Carousel from "./components/Carousel";
import { Link } from "react-router-dom";
import SearchVendors from "./components/SearchVendors";

const UserDashboard = () => {
  return (
    <div className="p-5 bg-base-100">
      <div>
        <div className="flex md:flex-row flex-col md:space-x-5 space-y-2">
          <Carousel />
          <SearchVendors />
        </div>
        <Link
          to="/services"
          className="btn btn-sm md:btn-md bg-base-300 border-0 text-white md:px-10 md:py-2 text-xs md:text-base my-2 md:my-3"
        >
          Check My Bookings
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
