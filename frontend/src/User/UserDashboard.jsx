import React from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="p-5 bg-base-100">
      <div>
        <Carousel />
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
