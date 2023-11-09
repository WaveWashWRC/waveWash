import React from "react";
import UserNavbar from "../User/UserNavbar";
import UserDashboard from "../User/UserDashboard";
import { Outlet } from "react-router-dom";
import Carousel from "../components/Carousel";

const User = () => {
  return (
    <div>
      <UserNavbar />
      <Outlet />
    </div>
  );
};

export default User;
