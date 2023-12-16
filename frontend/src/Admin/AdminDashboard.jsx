import React from "react";
import authContext from "../context/AuthContext";
import { useContext } from "react";
import AdminSidebar from "./components/Adminsidebar";
import AdminHeader from "./components/AdminHeader";
import { Outlet } from "react-router-dom";
import ApproveVendor from "./ApproveVendor";

const AdminDashboard = () => {
  const admin = useContext(authContext);
  console.log("admin", admin);
  if (admin.isAuthenticated)
    return (
      <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
        <AdminSidebar />
        <div className="p-4 flex-1 flex flex-col">
          <AdminHeader />
          <div className="flex-1 overflow-y-auto">
            <ApproveVendor />
            <Outlet />
          </div>
        </div>
      </div>
    );
};

export default AdminDashboard;
