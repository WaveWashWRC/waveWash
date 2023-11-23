import React from "react";
import VendorSidebar from "../components/VendorSidebar";
import { VendorHeader } from "../components/VendorHeader";
import { Outlet } from "react-router-dom";

const VendorDashboard = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <VendorSidebar />
      <div className="p-4 flex-1 flex flex-col">
        <VendorHeader />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        {/* <p>flooter</p> */}
      </div>
    </div>
  );
};

export default VendorDashboard;
