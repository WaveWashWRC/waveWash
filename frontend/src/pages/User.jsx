import React from "react";
import UserNavbar from "../User/UserNavbar";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className="bg-base-100">
      <UserNavbar />
      <Outlet />
    </div>
  );
};

export default User;
